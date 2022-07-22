define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/author/author-widget'
            },
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/auth/'),

            initialize: function (config) {
                this._super();
                // console.log('author')
                this.author = ko.observable(config.author);
                this.defaultImage = ko.observable(config.defaultImage);
                this.facebookImage = ko.observable(config.facebookImage);
                this.twitterImage = ko.observable(config.twitterImage);

                // console.log(this.author())
                // console.log(this.facebookImage())
                // console.log(this.twitterImage())
                // console.log(this.defaultImage())


            }


        });

    }
);
