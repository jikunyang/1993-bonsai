import SplitType from "split-type";
import gsap from "gsap";

const navHover = () => {
  new SplitType(".random", {
    types: "words, chars",
    tagName: "span",
  });

  gsap.matchMedia().add("(min-width: 992px)", () => {
    $(".random").each(function () {
      const originalChars = $(this).find(".char").map((_, char) => $(char).text()).get();

      $(this).hover(
        function () {
          const $chars = $(this).find(".char");
          let cycles = 3; // Number of random changes
          const interval = setInterval(() => {
            $chars.text(() =>
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26))
            );
            cycles--;
            if (cycles <= 0) {
              clearInterval(interval); // Stop after 3 cycles
              $chars.each((index, char) => $(char).text(originalChars[index])); // Restore original text
            }
          }, 100); // Change every 100ms
        },
        function () {
          // No action needed on hover out since it restores automatically
        }
      );
    });
  });
};

export default navHover;
