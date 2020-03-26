//$(function () { // DOM ready for jQuery??
//    //write your code below
$(window).on('load', function () {
    console.log("pre");
    $('.preloader').fadeOut('slow');
});



(function ($) {
    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element);
        node.classList.add("animated", animationName);

        function handleAnimationEnd() {
            node.classList.remove("animated", animationName);
            node.removeEventListener("animationend", handleAnimationEnd);

            if (typeof callback === "function") callback();
        }

        node.addEventListener("animationend", handleAnimationEnd);
    }
    test();

})(jQuery);
//The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
//    //alert("hey");
//    console.log('hi there from "js/scripts.js" - good to see you');
//    //console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
//}); //END DOM ready
$(function () {
    console.log("insta");

    $.instagramFeed({
        'username': 'annaseverine_kea',
        'container': "#my-instagram-feed",
        'iamge_size': [150, 240, 320, 320, 320],
        'display_profile': false,
        'display_biography': true,
        'display_igtv': false,
        'items': 6,
        'items_per_row': 3,
        'margin': 2.5,
        'styling': true,
        'display_gallery': true,
    });
})

function test() {
    document.addEventListener("scroll", () => {
        let scrollFromTop = document.documentElement.scrollTop;
        if (scrollFromTop > 800) {
            document.querySelector("#vision > div > div.d-sm-flex.flex-row.flex-fill.mt-5 > div.col-12.col-lg-6.col-md-6.mb-4").classList.add("slideInRight");
            document.querySelector("#vision > div > div.d-sm-flex.flex-row.flex-fill.mt-5 > div.col-12.col-lg-6.col-md-6.mb-4.slideInRight > img").classList.add("slideInRight");
            document.querySelector("#vision > div > div.d-sm-flex.flex-row.flex-fill.mt-5 > div.col-12.col-lg-6.col-md-6.mb-4").classList.remove("hidden");

            document.querySelector("#vision > div > div.d-sm-flex.flex-row.flex-fill.mt-5 > div.col-12.col-lg-6.col-md-6.text-sm-right.flex-column.align-self-center.pr-5.pl-5.animated.slow").classList.add("slideInLeft");
            document.querySelector("#vision > div > div.d-sm-flex.flex-row.flex-fill.mt-5 > div.col-12.col-lg-6.col-md-6.text-sm-right.flex-column.align-self-center.pr-5.pl-5.animated.slow").classList.remove("hidden");
        }
        if (scrollFromTop > 1400) {
            document.querySelector("#vision > div > div.d-sm-flex.flex-row-reverse.flex-fill > div.col-12.col-sm-6.col-lg-6.col-md-6.mb-4.animated.slow").classList.add("slideInLeft");
            document.querySelector("#vision > div > div.d-sm-flex.flex-row-reverse.flex-fill > div.col-12.col-sm-6.col-lg-6.col-md-6.flex-column.align-self-center.pr-5.pl-5.animated.slow").classList.add("slideInRight");
        }
        if (scrollFromTop > 2100) {
            document.querySelector("#vision > div > div:nth-child(3) > div.col-12.col-sm-6.col-lg-6.col-md-6.text-sm-right.flex-column.align-self-center.pr-5.pl-5.animated.slow").classList.add("slideInLeft");
            document.querySelector("#vision > div > div:nth-child(3) > div.col-12.col-sm-6.col-lg-6.col-md-6.text-sm-right.flex-column.align-self-center.pr-5.pl-5.animated.slow").classList.remove("hidden");
            document.querySelector("#vision > div > div:nth-child(3) > div.col-12.col-sm-6.col-lg-6.col-md-6.mb-5.animated.slow").classList.add("slideInRight");
            document.querySelector("#vision > div > div:nth-child(3) > div.col-12.col-sm-6.col-lg-6.col-md-6.mb-5.animated.slow").classList.remove("hidden");
        }
    });
}
