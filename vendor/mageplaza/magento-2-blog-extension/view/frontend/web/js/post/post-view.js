define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/post/post-view'
            },
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            urlCategory: ko.observable('http://magento2.test/blog/category/'),
            urlTag: ko.observable('http://magento2.test/blog/tag/'),
            urlTopic: ko.observable('http://magento2.test/blog/topic/'),
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),




            initialize: function (config) {
                this._super();
                 this.post = ko.observable(config.post);
                 this.authorName = ko.observable(config.authorName);
                 this.authorUrl = ko.observable(config.authorUrl);
                 this.categories = ko.observable(config.categories);
                 this.tags = ko.observable(config.tags);
                 this.date = ko.observable(config.date);


                // console.log('post view')
                // console.log(this.post())
                // console.log(this.authorName())
                // console.log(this.authorUrl())
                // console.log(this.categories())
                // console.log(this.tags())
                // console.log(this.date())
                // console.log(this.topics())


            }


        });

    }
);
