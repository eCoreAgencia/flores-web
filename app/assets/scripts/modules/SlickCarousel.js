class SlickCarousel {
    constructor() {
        this.carousel = $('.slide');
        this.shelf = $('.shelf__slider .prateleira ul');
        this.startSlick();
        this.startSlickShelf();
    }
    startSlick() {
        this.carousel.slick({
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            arrows: false,
            dots: true,
            draggable: true,
            touchMove: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    startSlickShelf(){
         this.shelf.slick({
            adaptiveHeight: true,
            autoplay: false,
            arrows: true,
            dots: false,
            mobileFirst: true,
            draggable: true,
            touchMove: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

    }
}
export default SlickCarousel;