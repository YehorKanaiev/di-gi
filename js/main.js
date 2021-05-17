
$(document).ready(function() {

    var owl = $(".front-carousel");

    owl.owlCarousel({
        singleItem:true,
        autoPlay: 6000,
        slideSpeed : 1000,
        paginationSpeed : 1000,
        rewindSpeed: 1000,
        stopOnHover: true,
    });

    // Custom Navigation Events
    $(".front-carousel__next").click(function(){
        owl.trigger('owl.next');
    })
    $(".front-carousel__prev").click(function(){
        owl.trigger('owl.prev');
    })
});