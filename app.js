import hideLoader from '/js/preloader.js';
import progressTextUpdate from '/js/pageProgressText.js';
import smoothScroll from '/js/smoothScroll.js';
import navHover from '/js/navHover.js';


const parceled = true

const onReady = () => {

   hideLoader();
   smoothScroll();
   progressTextUpdate();
   navHover();
}
const onLoading = () =>{


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

