
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const progressTextUpdate = () => {
    let progressText = $("#page-progress-text");

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          let progress = Math.round(self.progress * 100);
          progressText.text(progress);
        }
      });
    
}

  
  export default progressTextUpdate;

