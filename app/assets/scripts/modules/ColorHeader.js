class ColorHeader {
    constructor() {
        this.headerContainer = $('.site-header__container');
        this.primaryNavigation = $('.primary-nav li');
        this.headerLogo = $('.site-header__logo');
        this.headerGradient = $('.site-header--with-gradient');
        this.siteHeader=$('.site-header');
        this.events();
    }
    events() {
        this.headerContainer.hover(this.addColors.bind(this));
    }
    addColors() {
        this.headerContainer.toggleClass('site-header__container--color');
        this.primaryNavigation.toggleClass('primary-nav--color');
        this.headerLogo.toggleClass('site-header__logo--color');
        this.siteHeader.toggleClass('site-header--with-gradient');
    }
}


export default ColorHeader;

// this.headerContainer.mouseover(this.addColors.bind(this));
// this.primaryNavigation.mouseover(this.addColors.bind(this));
// this.headerContainer.mouseout(this.removeColors.bind(this));
// this.primaryNavigation.mouseout(this.removeColors.bind(this));