import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleCharsSplit = () => {
    new SplitType(".title-in", {
        types: "chars",
        tagName: "span",
    });
    
}
const titleIn = () => {
    $(".title-in").each(function () {
        let triggerElement = $(this);
        let targetElement = triggerElement.find(".char");
        
        // Retrieve the value from the `data-end` attribute
        let endValue = triggerElement.data("end") || 75; // Default to 75% if no data-end attribute is set

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 90%",
                end: `top ${endValue}%`, // Use the retrieved value here
                scrub: 1
            }
        });

        tl.from(targetElement, {
            duration: 0.3,
            opacity: 0,
            ease: "power1.inOut",
            stagger: {
                amount: 0.4,
                from: "0"
            }
        });
    });
};

export {titleCharsSplit, titleIn};
