require(['lazyLoading'], function (LazyLoad) {
    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });
    // console.log(lazyLoadInstance)
    lazyLoadInstance.update();
});


// require(['Magento_Customer/js/customer-data'], function (customerData) {
//
//     var cart = customerData.get('cart');
//     var count = cart().summary_count;
//     cart.subscribe(function () {
//         if (cart().summary_count !== count) {
//             // console.log(cart())
//             // count = cart().summary_count;
//             // // do something here
//             // console.log('Number of items in cart is now: ' + count);
//         }
//     });
// });

