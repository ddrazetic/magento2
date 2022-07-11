require(['Magento_Customer/js/customer-data'], function (customerData) {

    var cart = customerData.get('cart');
    var count = cart().summary_count;
    cart.subscribe(function () {
        if (cart().summary_count !== count) {
            // console.log(cart())
            // count = cart().summary_count;
            // // do something here
            // console.log('Number of items in cart is now: ' + count);
        }
    });
});


require([
    'jquery'
], function ($) {
    'use strict';


    // $(document).ready(function () {
    //     $(document).on('click', '#previousSlide', function () {
    //         prevSlide();
    //     });
    //     $(document).on('click', '#nextSlide', function () {
    //         nextSlide();
    //     });
    //
    //
    //     function prevSlide() {
    //         console.log('previous');
    //     }
    //
    //     function nextSlide() {
    //         console.log('next');
    //         // $('#previousSlide').attr("disabled", true);
    //         // $('#nextSlide').attr("disabled", true);
    //         $('.products-slider-container').append($('#product-slider li:first').clone().addClass('product-slider'));
    //         $('#product-slider').animate({
    //             marginLeft: -$('#product-slider li:first').width()
    //         });
    //         $('#product-slider li:first').delay(500).queue((next) => {
    //             $('#product-slider:first').remove();
    //             // $('#product-slider').css("margin-left", "0");
    //             next();
    //         });
    //     }
    // });

});
