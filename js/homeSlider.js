import Flickity from "flickity";

const mainCarousel = document.querySelector(".slider-container");
const mainSlides = document.querySelectorAll(".slider-slide");
const parallaxPercentage = 25;

const flkty = new Flickity(mainCarousel, {
    contain: true,
    freeScroll: true,
    percentPosition: true,
    pageDots: false,
    cellSelector: ".slider-slide",
    cellAlign: "left",
    resize: true,
    selectedAttraction: 0.01,
    dragThreshold: 1,
    freeScrollFriction: 0.05
});

// Function to handle scroll events and set image positions
function sliderScroll() {
    flkty.on("scroll", (progress) => {
        updateProgressBar(progress);
        setImagePositions();
    });
}

// Updates the progress bar width based on the scroll progress
function updateProgressBar(progress) {
    $(".progress_fill").css("width", `${progress * 100}%`);
}

// Sets the image position for each slide based on scroll progress and parallax effect
function setImagePositions() {
    mainSlides.forEach((slide) => {
        const targetElement = $(slide);
        const elementOffset = targetElement.offset().left + targetElement.width() - $(mainCarousel).offset().left;
        const parentWidth = $(mainCarousel).width() + targetElement.width();
        let slideProgress = (elementOffset / parentWidth) * parallaxPercentage;

        // Apply bounds for the parallax effect
        slideProgress = Math.max(0, Math.min(slideProgress, parallaxPercentage));

        targetElement.find(".slide-img").css("transform", `translateX(-${slideProgress}%)`);
    });
}

// Initialize the image positions immediately on load
setImagePositions();

export default sliderScroll;
