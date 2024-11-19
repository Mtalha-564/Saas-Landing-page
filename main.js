// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
if(document.documentElement.scrollTop > 20){
nav.classList.add("header-scrolled");
}else{
nav.classList.remove("header-scrolled");
}
}
// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
a.addEventListener("click", function(){
navCollapse.classList.remove("show");
})
})

$(document).ready(function ($) {
    "use strict";

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 3000,

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
});