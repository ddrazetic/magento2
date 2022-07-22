define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/post/blog-post-list'
            },
            showPopup: ko.observable(false),
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),
             info: ko.observable("<i class='mp-blog-icon mp-blog-calendar-times'></i> July 14, 2022| <i class='mp-blog-icon mp-blog-user'></i> <a class='mp-info' href='http://magento2.test/blog/author/admin.html'>Admin</a>| <i class='mp-blog-icon mp-blog-traffic' aria-hidden='true'></i> 2"),


            changeViewPopup: function (state) {
                this.showPopup(state)

            },

            initialize: function (config) {
                this._super();
                this.products = ko.observableArray(Object.values(config.posts));

                 // console.log('posts');
                 // console.log(config.posts);
                 // console.log(config.postInfo);
                for (let i = 0; i < this.products().length; i++) {
                    var txt = document.createElement("textarea");
                    txt.innerHTML =  config.postInfo[i];
                    this.products()[i]['infoHTML'] = txt.value
                     // console.log(this.products()[i]['infoHTML'])
                }
                     // console.log(this.products())
                     // console.log('ddd')



                // console.log(config.options);


            }


        });

    }
);
