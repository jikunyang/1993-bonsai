import loader from '/js/preloader.js';
import progressTextUpdate from '/js/pageProgressText.js';
import smoothScroll from '/js/smoothScroll.js';
import navHover from '/js/navHover.js';
import {titleCharsSplit, titleIn} from '/js/titleScrollIn.js'
import {textWordsSplit, textBlurIn} from '/js/wordBlurIn.js'
import {textCharsSplit, charFadeIn} from '/js/charFadeIn.js'
import lightboxMove from '/js/lightboxMove.js';


 
const parceled = true;

const onReady = () => {

    loader();
    smoothScroll();
    progressTextUpdate();
    navHover();
    titleCharsSplit();
    titleIn();
    textWordsSplit();
    textBlurIn();
    textCharsSplit();
    charFadeIn();
    lightboxMove();
}
const onLoading = () => {


}

if (document.readyState !== 'loading') {
    onLoading()
    onReady()
    console.log('readystate')
} else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}

