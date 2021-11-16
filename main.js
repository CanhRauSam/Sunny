const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const activeClass = 'is-show';
// menu
toggle.addEventListener('click', function () {
    menu.classList.add(activeClass);

});
window.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
        menu.classList.remove(activeClass);
    }
})
//testimonial slider basic
// window.addEventListener('load', function () {

//     const sliderItems = document.querySelectorAll('.testimonial-item');
//     const silder = document.querySelector('.testimonial-list')
//     const sliderItemWidth = sliderItems[0].clientWidth;
//     const arrowLeft = document.querySelector('.arrow-left');
//     const arrowRight = document.querySelector('.arrow-right');
//     let positionX = 0;
//     let index = 0;
//     arrowRight.addEventListener('click', function () {
//         arrowLeft.classList.remove('disabled');
//         if (index >= sliderItems.length - 1) {
//             this.classList.add('disabled');
//             return;
//         }
//         positionX += sliderItemWidth;
//         index++;
//         silder.setAttribute('style', `transform: translateX(-${positionX}px);`)
//     });
//     arrowLeft.addEventListener('click', function () {
//         arrowRight.classList.remove('disabled');
//         if (index <= 0) {
//             this.classList.add('disabled');
//             return;
//         }
//         positionX -= sliderItemWidth;
//         index--;
//         silder.setAttribute('style', `transform: translateX(-${positionX}px);`)
//     });
// });

// testimonial slick slider
$(document).ready(function () {
    $('.testimonial-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    });
});