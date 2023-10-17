import $ from 'jquery';

class ResponsiveNav {
    constructor() {
        this.nav = $('.mobile-nav');
        this.document = $(document);
        this.overlay = $('.overlay');
        this.menuIcon = $('.menu');
        this.closeIcon = $('.close');
        this.header = $('header');
        this.events();
    }

    //EVENT
    events() {
        this.document.on('click', this.navMobileMenuClickHandler.bind(this));
    }

    //MODULES
    navMobileMenuClickHandler(event) {
        if (!!event.target.closest('.mobile-menu')) {
            this.overlay.toggleClass('hidden');
            this.nav.toggleClass('max-2xl:show');
            this.menuIcon.toggleClass('hidden');
            this.closeIcon.toggleClass('hidden');
        } else {
            this.overlay.addClass('hidden');
            this.nav.removeClass('max-2xl:show');
            this.menuIcon.removeClass('hidden');
            this.closeIcon.addClass('hidden');
        }
    }
}

class Accordion {
    constructor() {
        this.accordionItem = $('.accordion-item');
        this.itemInfo = $('.item-info');
        this.arrow = $('.caret-icon');
        this.events();
    }

    //EVENT
    events() {
        this.accordionItem.on('click', this.accordionClickHandler.bind(this));
    }

    //MODULES
    accordionClickHandler(event) {
        const currItem = event.currentTarget;

        this.itemInfo.each((_, item) => {
            $(item).removeClass('active');
        });
        this.arrow.each((_, item) => {
            $(item).removeClass('caret-up');
        });
        $(currItem).find('.item-info').addClass('active');
        $(currItem).find('.caret-icon').addClass('caret-up');
    }
}
$(function () {
    new ResponsiveNav();
    new Accordion();
});
