import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lightboxMove = () => {
  $(".lightbox").each(function (index) {
    if ((index + 1) % 2 === 0) {
      // Even-indexed elements
      gsap.fromTo(
        $(this),
        { y: "0rem" },
        {
          y: "-4rem",
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".hero-content-wrap",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    } else {
      // Odd-indexed elements
      gsap.fromTo(
        $(this),
        { y: "-2rem" },
        {
          y: "2rem",
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".hero-content-wrap",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  });
};

export default lightboxMove;
