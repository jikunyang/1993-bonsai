import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textScrollIn = () =>{
    new SplitType(".line-split", {
        types: "words",
        tagName: "span",
      });
    
      let windowWidth = window.outerWidth;
      $(window).resize(function () {
          if (window.outerWidth !== windowWidth) {
            mySplitText.revert();
                location.reload();
        }
        windowWidth = window.outerWidth;
      });
    
    function createTextAnimations() {
      // Line Animation
      $(".line-split").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this).find(".words");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom",
            end: "top 50%",
            scrub: 1
          }
        });
        tl.from(targetElement, {
          duration: 0.5,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 0.4,
            from: "0"
          }
        });
      });
    }
    console.log("scroll in");
}



export default textScrollIn;
