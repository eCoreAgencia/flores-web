class SlickCarousel {
    constructor() {
        this.carousel = $('.slide');
        this.startSlick();
    }
    startSlick() {
        this.carousel.slick({
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            arrows: true,
            dots: false,
            draggable: true,
            touchMove: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
}
export default SlickCarousel;