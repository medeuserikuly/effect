import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import modals from "./modules/modals.js";
import navMenu from "./modules/navMenu.js";
import slider from "./modules/slider.js";
import isWebp from "./modules/webp.js";


window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    isWebp();
    navMenu();
    slider('.slider__item', 'horizontal', '.prev-button', '.next-button');
    modals();
    forms();
    mask('[name="user_phone"]');


    const whatsapp = document.querySelector('.pulse-button');
    whatsapp.addEventListener('click', () => {
        open("https://wa.me/77057759919");
    });

    document.querySelectorAll('.btn_whatsaspp').forEach(btn => {
        btn.addEventListener('click', () => {
            open("https://wa.me/77057759919");
        });
    });
});