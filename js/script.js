//$(function () { // DOM ready for jQuery??
//    //write your code below
$(window).on('load', function () {
    console.log("pre");
    $('.preloader').fadeOut('slow');
});

(function ($) {

    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

})(jQuery);
//The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
//    //alert("hey");
//    console.log('hi there from "js/scripts.js" - good to see you');
//    //console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
//}); //END DOM ready
