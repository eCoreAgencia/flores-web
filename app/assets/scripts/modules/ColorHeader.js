class ColorHeader {
    constructor() {
        this.headerContainer = $('.site-header__container');
        this.primaryNavigation = $('.primary-nav');
        this.headerLogo = $('.site-header__logo');
        this.headerGradient = $('.site-header--with-gradient');
        this.siteHeader=$('.site-header');
        this.siteHeaderText=$('.site-header__text');
        this.headerSvg=$('.site-header__icon');
        this.headerSelector=$('.site-header__selector');
        this.headerSelectorArrow=$('.arrow-down');
        this.searchBox=$('.fulltext-search-box');
        this.searchBoxIcon=$('.search-box__icon');
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
        this.siteHeaderText.toggleClass('site-header__text--light-grey');
        this.headerSvg.toggleClass('site-header__icon--light-grey');
        this.headerSelector.toggleClass('site-header__selector--color');
        this.searchBox.toggleClass('fulltext-search-box--color');
        this.searchBoxIcon.toggleClass('search-box__icon--color');
        this.headerSelectorArrow.toggleClass('arrow-down--color');
    }
}


export default ColorHeader;

// this.headerContainer.mouseover(this.addColors.bind(this));
// this.primaryNavigation.mouseover(this.addColors.bind(this));
// this.headerContainer.mouseout(this.removeColors.bind(this));
// this.primaryNavigation.mouseout(this.removeColors.bind(this));