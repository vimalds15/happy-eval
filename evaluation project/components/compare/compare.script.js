function initializeCompare() {
  fetch("mock/compare.json")
    .then((response) => response.json())
    .then((moreItemsData) => {
      const container = document.querySelector(".compare-plans-container");
      const tableContainer = container.querySelector(".plans-table-container");
      const grid = tableContainer.querySelector(".plans-grid");

      grid.innerHTML = "";

      const headerRow = document.createElement("div");
      headerRow.classList.add("plans-grid-header");

      const rowHeader = document.createElement("div");
      rowHeader.classList.add("plans-grid-header-item", "row-header");
      headerRow.appendChild(rowHeader);

      moreItemsData.headers.forEach((header) => {
        const headerItem = document.createElement("div");
        headerItem.classList.add("plans-grid-header-item");
        headerItem.textContent = header;
        headerRow.appendChild(headerItem);
      });

      grid.appendChild(headerRow);

      moreItemsData.features.forEach((featureGroup) => {
        if (featureGroup.category) {
          const categoryDiv = document.createElement("div");
          categoryDiv.classList.add("plans-grid-category");

          const categoryHeader = document.createElement("div");
          categoryHeader.classList.add("plans-grid-category-header");
          categoryHeader.textContent = featureGroup.category;
          categoryDiv.appendChild(categoryHeader);

          grid.appendChild(categoryDiv);
        }

        featureGroup.items.forEach((feature) => {
          const row = document.createElement("div");
          row.classList.add("plans-grid-row");

          const featureNameColumn = document.createElement("div");
          featureNameColumn.classList.add("plans-grid-item", "row-header");
          featureNameColumn.innerHTML = `<p>${feature.header}</p>`;
          row.appendChild(featureNameColumn);

          moreItemsData.headers.forEach((plan) => {
            const planColumn = document.createElement("div");
            planColumn.classList.add("plans-grid-item");

            let featureValue =
              feature[plan === "Enterprise PRO" ? "epro" : plan.toLowerCase()];
            console.log(feature);

            if (typeof featureValue === "boolean") {
              const tick = document.createElement("div");
              tick.classList.add(
                featureValue ? "pricing-tick" : "pricing-no-tick"
              );
              planColumn.appendChild(tick);
            } else if (featureValue === null) {
              planColumn.textContent = "maybe";
            } else {
              planColumn.textContent = featureValue;
            }

            row.appendChild(planColumn);
          });

          grid.appendChild(row);
        });
      });
    })
    .catch((error) => console.error("Error loading the JSON data:", error));
}

document.addEventListener("compare", initializeCompare);
