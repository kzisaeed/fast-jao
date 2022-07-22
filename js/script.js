


$(".srcbutton"). click(function(){
$(".searchbox").toggleClass("searchboxanima")
})

$(".banner-slider"). slick({
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    fade: true,
})  


$('.js-tilt').tilt({
    maxTilt: 5,
})

$(".checkout-slider").slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-angle-left previous"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right nextone"></i>',

})

// sponsor-part start //

$(".sponsor-slider").slick({
    slidesToShow: 5,
    autoplay:true,
    autiplaySpeed:5000,
    arrows:false,

    
})
// sponsor-part end //

