define(['jquery', 'uiComponent', 'ko', "owlCarousel"], function ($, Component, ko, owlCarousel) {
        'use strict';
        ko.bindingHandlers.owlCarouselInitiatorProducts = {
            init: function () {
                $('.owl-carousel').owlCarousel({
                    items: 3,
                    loop: false,
                    margin: 10,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true,
                    responsive: {
                        600: {
                            items: 4
                        }
                    }
                })
            }
        };
        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/product/related-list'
            },
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            noImageUrl: ko.observable('http://magento2.test/pub/static/frontend/Training/default/en_US/Mageplaza_Blog/media/images/mageplaza-logo-default.png'),
            urlImage: ko.observable('http://magento2.test/pub/media/catalog/product'),
            urlPostImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),

            addService: function (id, urlPost, uenc, type_id, url_key) {

                    const formKey = jQuery.cookie('form_key');
                    const formData = new FormData();
                    formData.append('form_key', formKey)
                    formData.append('uenc', uenc)
                    formData.append('qty', 1)
                    formData.append('product', id)

                    const self = this;
                    $.ajax({
                        type: "POST",
                        url: urlPost,
                        processData: false,
                        contentType: false,
                        data: formData,
                        enctype: 'multipart/form-data',
                        success: function (msg) {
                            console.log("Product added to cart !");

                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            alert("some error");
                        }
                    })

                if (type_id === "configurable") {
                    window.location.href = "http://magento2.test/" + url_key + ".html";
                }

            },

            initialize: function (config) {
                this._super();
                this.products = ko.observableArray(Object.values(config.products));
                this.relatedMode = ko.observable(config.relatedMode);
                // console.log("related products!");
                // console.log(config.params)
                for (let i = 0; i < this.products().length; i++) {
                    var txt = document.createElement("textarea");
                    txt.innerHTML = config.reviews[i];
                    this.products()[i]['reviewHTML'] = txt.value

                    var txt1 = document.createElement("textarea");
                    txt1.innerHTML = config.prices[i];
                    this.products()[i]['priceHTML'] = txt1.value

                    var txt2 = document.createElement("textarea");
                    txt2.innerHTML = this.products()[i]['name'];
                    this.products()[i]['name'] = txt2.value

                    this.products()[i]['action'] = config.params[i].action
                    this.products()[i]['uenc'] = config.params[i].data.uenc
                }

                this.onCarouselMoved = function () {
                    console.log("The carousel moved!");
                };
                 // console.log(this.products())
                // console.log(this.relatedMode())

            }

        });

    }
);
