import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lightboxMove = () => {
    $(".lightbox").each(function (index) {
        if ((index + 1) % 2 === 0) { // Target every even-indexed element
          gsap.fromTo(
            $(this),
            {  y: "4vw" }, // Starting state
            { 
              y: "-6vw", // Ending state
              duration: 1, 
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: ".hero-content-wrap",
                start: "top top", // Adjust start position
                end: "bottom bottom", // Adjust end position
                scrub: true, // Smooth scrolling effect
              }
            }
          );
        }
      });
}
export default lightboxMove;

