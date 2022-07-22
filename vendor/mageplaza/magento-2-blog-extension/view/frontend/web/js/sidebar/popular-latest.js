define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/sidebar/popular-latest'
            },
            showPopup: ko.observable(false),
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),
            noImageUrl: ko.observable('http://magento2.test/pub/static/frontend/Training/default/en_US/Mageplaza_Blog/media/images/mageplaza-logo-default.png'),
            changeViewPopup: function (state) {
                this.showPopup(state)

            },

            initialize: function (config) {
                this._super();
                this.postsView = ko.observableArray(Object.values(config.postsView));
                this.postsRecent = ko.observableArray(Object.values(config.postsRecent));

                // console.log(this.postsView())
                // console.log(this.postsRecent())




            }


        });

    }
);
