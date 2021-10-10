// banner-slider
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


// testimonial-slider
$('.testimonial-slider').owlCarousel({   
    loop: true,
    margin: 8,  
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    nav: true,
    dots: false, 
    
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

