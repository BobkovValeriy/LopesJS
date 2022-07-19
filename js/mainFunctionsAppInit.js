"use strict";

//initialization of main functions of all pages
appMainInit()

function appMainInit() {
    const appFunctions = [
        initBurgerMenu,
        initHover,
        initSectionExpandArrows,
        initSwiper,
    ];
    appFunctions.forEach(func => func());
}

//it`s a menu burger logic
function initBurgerMenu() {
    const body = document.querySelector('body');
    const menuBurger = document.querySelector('.menu__burger');
    const menuPunkts = document.querySelector('.menu__punkts');

    menuBurger.addEventListener("click", function (event) {
        menuBurger.classList.toggle('active')
        menuPunkts.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

//it will init hover class in table
function initHover() {
    const hoover = document.querySelectorAll('.hoverable');
    hoover.forEach(hooverItem => {
        hooverItem.addEventListener('mouseover', function (event) {
            hooverItem.classList.add('hoover');
        });
        hooverItem.addEventListener('mouseout', function (event) {
            hooverItem.classList.remove('hoover');
        });
    });
}

//it will spin arrows
function initSectionExpandArrows() {
    const example = document.querySelectorAll('.example-item');

    example.forEach(exampleItem => {
        exampleItem.addEventListener("click", function (event) {
            const rotate = exampleItem.querySelector('.marker');
            rotate.classList.toggle('clicked');
            exampleItem.nextElementSibling.classList.toggle('display__none');
        });
    });
}

//it is swiper logic
function initSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        height: 475,
        slidesPerView: 1,
        spaceBetween: 10,
        on: {
            resize: (swiper) => {
                let totalGap = swiper.passedParams.spaceBetween * (swiper.passedParams.slidesPerView - 1);
                let containerHeight = swiper.passedParams.slidesPerView * swiper.slides[0].clientHeight + totalGap;

                swiper.el.style.height = containerHeight + 'px';
            },
        },
    });
}