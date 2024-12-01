import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textCharsSplit = () => {
    new SplitType(".char-fade-in", {
        types: "chars",
        tagName: "span",
    });
    
}
const charFadeIn = () => {
    $(".char-fade-in").each(function () {
        let triggerElement = $(this);
        let targetElement = triggerElement.find(".char");
        

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 80%",
                end: "top 60%", 
                scrub: 1
            }
        });

        tl.from(targetElement, {
            duration: 0.01,
            opacity: 0,
            stagger: {
                amount: 0.1,
            }
        });
    });
};

export {textCharsSplit, charFadeIn};
