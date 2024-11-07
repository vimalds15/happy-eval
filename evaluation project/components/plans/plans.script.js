function initializePlans() {
  const container = document.querySelector(".plans-pricing-container");
  const pricingModes = document.querySelectorAll(".plans-mode-item");

  container.innerHTML = "";

  fetch("mock/plans.json")
    .then((response) => response.json())
    .then((plans) => {
      const updatePrices = () => {
        plans.forEach((plan, index) => {
          const priceElement = container
            .querySelectorAll(".plans-pricing-item")
            [index].querySelector(".plans-pricing-item-amount");
          if (priceElement) {
            const price = plan.price[currentPricingMode];
            priceElement.innerHTML = `
                    <span class="text-lg text-bold">$</span><span class="text-3xl text-bold">${price}</span>
                    <span class="font-light">Per agent/mo</span>
                  `;
          }
        });
      };

      plans.forEach((plan) => {
        const planElement = document.createElement("div");
        planElement.classList.add("plans-pricing-item");

        if (plan.badge) {
          const badgeElement = document.createElement("p");
          badgeElement.classList.add("plans-pricing-item-badge");
          badgeElement.textContent = plan.badge;
          planElement.appendChild(badgeElement);
        }

        const planType = document.createElement("p");
        planType.classList.add(
          "plans-pricing-item-type",
          "text-xlg",
          "text-bold"
        );
        console.log(plan.type);
        planType.textContent = plan.type;
        planElement.appendChild(planType);

        if (plan.price) {
          const priceElement = document.createElement("p");
          priceElement.classList.add("plans-pricing-item-amount");
          priceElement.innerHTML = `
            <span class="text-lg text-bold">$</span><span class="text-3xl text-bold">${plan?.price?.monthly}</span>
            <span class="font-light">Per agent/mo</span>
            `;
          planElement.appendChild(priceElement);
        }

        if (plan.subText) {
          const subTextElement = document.createElement("p");
          subTextElement.classList.add("plans-pricing-item-subtext");
          subTextElement.textContent = plan.subText;
          planElement.appendChild(subTextElement);
        }

        if (plan.priceCtaText) {
          const aElement = document.createElement("a");
          aElement.setAttribute("href", plan.priceCtaLink);
          aElement.setAttribute("target", "_blank");

          const pElement = document.createElement("p");
          pElement.classList.add("plans-pricing-item-cta");
          pElement.textContent = plan.priceCtaText;

          aElement.appendChild(pElement);

          planElement.appendChild(aElement);
        }

        const featuresList = document.createElement("ul");
        featuresList.classList.add("plans-pricing-item-features");
        plan.features.forEach((feature) => {
          const featureItem = document.createElement("li");
          featureItem.textContent = feature;
          featuresList.appendChild(featureItem);
        });
        planElement.appendChild(featuresList);

        const ctaContainer = document.createElement("div");
        ctaContainer.classList.add("plans-pricing-item-demo-cta");
        const ctaText = document.createElement("p");
        ctaText.textContent = plan.ctaText;
        const ctaLink = document.createElement("a");
        ctaLink.href = plan.ctaLink;
        ctaLink.target = "_blank";
        ctaLink.appendChild(ctaText);
        ctaContainer.appendChild(ctaLink);
        planElement.appendChild(ctaContainer);

        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg.setAttribute("width", "8px");
        svg.setAttribute("height", "14px");
        svg.setAttribute("viewBox", "0 0 8 14");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("stroke", "none");
        g.setAttribute("stroke-width", "1");
        g.setAttribute("fill", "none");
        g.setAttribute("fill-rule", "evenodd");
        g.setAttribute("stroke-linecap", "round");

        const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g1.setAttribute("transform", "translate(-461.000000, -962.000000)");
        g1.setAttribute("stroke", "#000000");
        g1.setAttribute("stroke-width", "2");
        g.appendChild(g1);

        const polyline = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "polyline"
        );
        polyline.setAttribute(
          "transform",
          "translate(462.000000, 969.000000) rotate(-45.000000) translate(-462.000000, -969.000000)"
        );
        polyline.setAttribute("points", "466 965 466 973 458 973");

        g1.appendChild(polyline);
        svg.appendChild(g);

        ctaContainer.appendChild(svg);

        planElement.addEventListener("mouseenter", () => {
          g1.setAttribute("stroke", "#fff");
        });

        planElement.addEventListener("mouseleave", () => {
          g1.setAttribute("stroke", "#111");
        });

        container.appendChild(planElement);
      });

      pricingModes.forEach((mode) => {
        mode.addEventListener("click", () => {
          currentPricingMode = mode.id.toLowerCase(); // e.g., "monthly", "yearly", or "two-years"

          pricingModes.forEach((btn) => btn.classList.remove("active"));
          mode.classList.add("active");
          updatePrices();
        });
      });
    });
}

document.addEventListener("plans", initializePlans);
