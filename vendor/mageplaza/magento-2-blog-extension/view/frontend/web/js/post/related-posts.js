define(['jquery', 'uiComponent', 'ko' , "owlCarousel"], function ($, Component, ko,owlCarousel) {
        'use strict';
        ko.bindingHandlers.owlCarouselInitiator = {
            init: function () {
                $('.owl-carousel').owlCarousel({
                    items: 2,
                    loop: true,
                    margin: 10,
                    autoplay:true,
                    autoplayTimeout:2000,
                    autoplayHoverPause:true,
                    responsive: {
                        600: {
                            items: 3
                        }
                    }
                })
            }
        };
        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/post/related-posts'
            },
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            noImageUrl: ko.observable('http://magento2.test/pub/static/frontend/Training/default/en_US/Mageplaza_Blog/media/images/mageplaza-logo-default.png'),
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/auth/'),
            urlPostImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),


            initialize: function (config) {
                this._super();
                // this.defaultImage = ko.observable(config.defaultImage);
                this.relatedPosts = ko.observableArray(Object.values(config.relatedPosts));
                // this.postsInfo = ko.observableArray(Object.values(config.postsInfo));
                this.relatedMode = ko.observable(config.relatedMode);
                // console.log(config.postsInfo)


                for (let i = 0; i < this.relatedPosts().length; i++) {
                    var txt = document.createElement("textarea");
                    txt.innerHTML =  config.postsInfo[i];
                    // txt.value.replace("'\'", '')
                    this.relatedPosts()[i]['infoHTML'] = txt.value
                    // console.log(this.products()[i]['infoHTML'])
                }

                this.onCarouselMoved = function () {
                    console.log("The carousel moved!");
                };
                // console.log('post related posts')
                // console.log(this.relatedPosts())
                // console.log(this.relatedMode())

            }

        });

    }
);
