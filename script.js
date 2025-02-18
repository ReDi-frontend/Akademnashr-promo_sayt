'use strict';
const elSiteHeader = document.querySelector('.site-header');

// documentdan emas SiteHeaderdan qidirish
const elSitenav = elSiteHeader.querySelector('.sitenav');
const elSitenavToggler = elSiteHeader.querySelector('.responsive-btn');


if (elSitenavToggler) {
    elSitenavToggler.addEventListener('click', function () {
        elSiteHeader.classList.toggle('site-header--open')
    });
}
