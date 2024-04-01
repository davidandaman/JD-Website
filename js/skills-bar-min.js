document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger),
    gsap.utils.toArray(".bar").forEach((e, t) => {
      const o = e.querySelector(".thumb span"),
        r = e.querySelector("abbr"),
        n = () => {
          if (o && r) {
            const t =
              (parseFloat(r.textContent) / 100) *
              (e.offsetWidth - r.offsetWidth);
            gsap.set(o, { scaleX: 0 }),
              gsap.to(o, {
                scaleX: 1,
                duration: 1.5,
                ease: "power2.out",
                transformOrigin: "left",
              }),
              gsap.set(r, { left: 0 }),
              gsap.to(r, { left: t, duration: 1.5, ease: "power2.out" });
          }
        };
      ScrollTrigger.create({
        trigger: e,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        onEnter: n,
      }),
        window.addEventListener("resize", n);
    });
});
