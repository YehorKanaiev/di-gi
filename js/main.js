
$(document).ready(function() {

    var front = $(".front-carousel");

    front.owlCarousel({
        singleItem:true,
        autoPlay: 6000,
        slideSpeed : 1000,
        paginationSpeed : 1000,
        rewindSpeed: 1000,
        stopOnHover: true,
    });

    // Custom Navigation Events
    $(".front-carousel__next").click(function(){
        front.trigger('owl.next');
    })
    $(".front-carousel__prev").click(function(){
        front.trigger('owl.prev');
    })

    var testimonial = $(".testimonial-carousel");

    testimonial.owlCarousel({
        singleItem:true,
        autoPlay: 6000,
        slideSpeed : 1000,
        paginationSpeed : 1000,
        rewindSpeed: 1000,
        stopOnHover: true,
    });
});