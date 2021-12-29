//Configuração do J Query para o Own Carousel

$('.owl-carousel').owlCarousel({
    //Loop: o filme vai e volta
    loop:true,

    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        },
        1400:{
            items: 8
        }
    }
})