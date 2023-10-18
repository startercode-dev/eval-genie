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

class SectionAnimation {
    constructor() {
        this.hero = $('.hero-section');
        this.features = $('.features-section');
        this.faqs = $('.faqs-section');
        this.contact = $('.contact-section');
        this.events();
    }

    //EVENT
    events() {
        this.observer(this.hero, 'h1');
        this.observer(this.hero, '.hero-p');
        this.observer(this.hero, '.cta-btns');
        this.observer(this.features, '.left-col-features');
        this.observer(this.features, '.card-container');
        this.observer(this.faqs, '.faqs-heading');
        this.observer(this.faqs, '.faqs-collapsibles');
        this.observer(this.contact, '.col-1-container');
        this.observer(this.contact, '.col-2-container');
    }

    //MODULES
    observer(section, className) {
        const featuresObserver = new IntersectionObserver(
            this.runAnimation.bind('', className),
            {
                root: null,
                threshold: 0.15,
            },
        );
        featuresObserver.observe(section[0]);
    }
    runAnimation(className, entries) {
        entries.forEach((entry) => {
            console.log($(className));
            if (entry.isIntersecting) {
                $(className).removeClass('init-animation');
            }
        });
    }
}
$(function () {
    new ResponsiveNav();
    new Accordion();
    new SectionAnimation();
});
