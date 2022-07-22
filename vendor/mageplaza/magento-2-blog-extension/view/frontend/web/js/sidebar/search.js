define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/sidebar/search'
            },
            showPopup: ko.observable(false),
            posts: ko.observableArray([]),
            textbox: ko.observable(),
            urlPost: ko.observable('http://magento2.test/blog/post/'),
            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/post/'),
            noImageUrl: ko.observable('http://magento2.test/pub/static/frontend/Training/default/en_US/Mageplaza_Blog/media/images/mageplaza-logo-default.png'),
            changeViewPopup: function (state) {
                this.showPopup(state)

            },
            query: ko.observable(''),
            openUrl: function (url) {
                window.location.href = url;
            },
            search: function (value) {
                this.posts([]);
                if (value == '') return;

                let modifiedArr = this.allPosts().filter(function (post) {

                    return (post.value.toLowerCase().indexOf(value.toLowerCase()) >= 0);
                });
                this.posts(modifiedArr.slice(0, 10))
                // console.log(this.posts())

                // console.log(value)
            },


            initialize: function (config) {
                this._super();

                this.allPosts = ko.observable(config.allPosts);
                // this.postsRecent = ko.observableArray(Object.values(config.postsRecent));

                // console.log(this.allPosts())
                // console.log(this.postsRecent())


                this.query.subscribe(this.search.bind(this));

            }


        });

    }
);
