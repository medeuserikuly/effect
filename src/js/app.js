import navMenu from "./modules/navMenu.js";
import slider from "./modules/slider.js";
import isWebp from "./modules/webp.js";

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    isWebp();
    navMenu();
    slider('.slider__item', 'horizontal', '.prev-button', '.next-button');
    
    const whatsapp = document.querySelector('.pulse-button');
    whatsapp.addEventListener('click', () => {
        open("https://wa.me/77777777777");
    });

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            open("https://wa.me/77777777777");
        });
    });
});