define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/sitemap/sitemap'
            },
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            urlCategory: ko.observable('http://magento2.test/blog/category/'),
            urlTag: ko.observable('http://magento2.test/blog/tag/'),
            urlTopic: ko.observable('http://magento2.test/blog/topic/'),



            initialize: function (config) {
                this._super();
                this.posts = ko.observableArray(Object.values(config.posts));
                this.categories = ko.observableArray(Object.values(config.categories));
                this.topics = ko.observableArray(Object.values(config.topics));
                this.tags = ko.observableArray(Object.values(config.tags));

                // console.log(this.posts())
                // console.log(this.categories())
                // console.log(this.topics())
                // console.log(this.tags())


            }


        });

    }
);
