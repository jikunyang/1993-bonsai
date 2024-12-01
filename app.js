import loader from '/js/preloader.js';
import progressTextUpdate from '/js/pageProgressText.js';
import smoothScroll from '/js/smoothScroll.js';
import navHover from '/js/navHover.js';
import textScrollIn from '/js/textScrollIn.js'


const parceled = true

const onReady = () => {

    loader();
    smoothScroll();
    progressTextUpdate();
    navHover();
    textScrollIn();
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

