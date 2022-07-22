define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/post/about-author'
            },

            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/auth/'),




            initialize: function (config) {
                this._super();
                 this.defaultImage = ko.observable(config.defaultImage);
                 this.author = ko.observable(config.author);

                // console.log('post author')
                // console.log(this.defaultImage())
                // console.log(this.author())

            }

        });

    }
);
