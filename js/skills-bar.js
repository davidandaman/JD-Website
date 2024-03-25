document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".bar").forEach((bar, index) => {
    const thumbSpan = bar.querySelector(".thumb span");
    const abbr = bar.querySelector("abbr");

    const updatePositions = () => {
      if (thumbSpan && abbr) {
        const percentage = parseFloat(abbr.textContent);
        const barWidth = bar.offsetWidth;
        const abbrWidth = abbr.offsetWidth;

        // Calcul de la position de l'abbr en pixels
        const abbrPosition = (percentage / 100) * (barWidth - abbrWidth);

        console.log("Percentage:", percentage);
        console.log("Bar Width:", barWidth);
        console.log("Abbreviation Width:", abbrWidth);
        console.log("Calculated Abbreviation Position:", abbrPosition);

        gsap.set(thumbSpan, { scaleX: 0 });
        gsap.to(thumbSpan, {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          transformOrigin: "left",
        });

        gsap.set(abbr, { left: 0 });
        gsap.to(abbr, {
          left: abbrPosition,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    ScrollTrigger.create({
      trigger: bar,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none none",
      onEnter: updatePositions,
    });

    window.addEventListener("resize", updatePositions);
  });
});
