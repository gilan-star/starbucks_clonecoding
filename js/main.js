// SEARCH ICON
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// FADING OUT BADGES WHEN IT IS SCROLLED
// const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', _.throttle(function () {
//     console.log(window.scrollY);
//     if (window.scrollY > 500) {
//         // hide badge
//         // gsap.to(요소, 지속시간, 옵션);
//         gsap.to(badgeEl, .6, {
//             opacity: 0,
//             display: 'none'
//         });
//     } else {
//         // show badge
//         gsap.to(badgeEl, .6, {
//             opacity: 1,
//             display: 'block'
//         });
//     }
// }, 300));


// FADING IN VISUAL IMAGES IN ORDER
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    });
});


// NOTICE SLIDE
// new Swiper('css Selector', option);
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
    loop: true,
    // autoplay: {
    //     delay: 5000
    // }
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// PROMOTION TOGGLE BUTTON
const promotionEl = document.querySelector('.promotion');
const promotionTogglBtn = document.querySelector('.toggle-promotion');
const promotionArrowBtn = promotionTogglBtn.querySelector('img');
let isHidePromotion = false;

promotionTogglBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.remove('hide');
        promotionArrowBtn.classList.add('rotated');
    } else {
        promotionEl.classList.add('hide');
        promotionArrowBtn.classList.remove('rotated');
    }
});

// USING SCROLLMAGIC LIBRARY
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

// GET FULL YEAR FOR COPYRIGHT
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();