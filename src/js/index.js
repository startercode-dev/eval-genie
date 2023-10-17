import $ from 'jquery';

class ResponsiveNav {
    constructor() {
        this.nav = document.querySelector('.mobile-nav');
        this.document = document;
        this.overlay = document.querySelector('.overlay');
        this.menuIcon = document.querySelector('.menu');
        this.closeIcon = document.querySelector('.close');
        this.header = this.document.querySelector('header');
        this.events();
    }

    //EVENT
    events() {
        this.document.addEventListener(
            'click',
            this.navMobileMenuClickHandler.bind(this),
        );
    }

    //MODULES
    navMobileMenuClickHandler(event) {
        console.log(this.nav);
        if (!!event.target.closest('.mobile-menu')) {
            this.overlay.classList.toggle('hidden');
            this.nav.classList.toggle('max-2xl:show');
            this.menuIcon.classList.toggle('hidden');
            this.closeIcon.classList.toggle('hidden');
        } else {
            this.overlay.classList.add('hidden');
            this.nav.classList.remove('max-2xl:show');
            this.menuIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
        }
    }
}
$(function () {
    new ResponsiveNav();
});
