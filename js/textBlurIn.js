import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textWordsSplit = () => {
    new SplitType(".text-fade-in", {
        types: "words",
        tagName: "span",
    });
    
}
const textBlurIn = () => {
    $(".text-fade-in").each(function () {
        let triggerElement = $(this);
        let targetElement = triggerElement.find(".word");
        
        // Retrieve the value from the `data-end` attribute
        let endValue = triggerElement.data("end") || 75; // Default to 75% if no data-end attribute is set

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 90%",
                end: `top 50%`, // Use the retrieved value here
                scrub: 1
            }
        });

        tl.from(targetElement, {
            duration: 0.8,
            filter: "blur(10px)", 
            ease: "power1.inOut",
            stagger: {
                amount: 0.4,
                from: "0"
            }
        });
    });
};

export {textWordsSplit, textBlurIn};
