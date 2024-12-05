import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lightboxMove = () => {
  $(".lightbox").each(function (index) {
    gsap.fromTo(
      $(this),
      { y: (index + 1) % 2 === 0 ? "2rem" : "-2rem" }, // Initial position based on index
      {
        y: (index + 1) % 2 === 0 ? "-2rem" : "0rem", // Final position based on index
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: $(this), // Each lightbox element as the trigger
          start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the element hits the top of the viewport
          scrub: true,
        },
      }
    );
  });
};

export default lightboxMove;
