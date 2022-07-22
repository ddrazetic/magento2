define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';
        ko.bindingHandlers.commentInitiator = {
            loginUrl: '',
            init: function (element, valueAccessor, allBindingsAccessor, context) {
                const self = this
                let loginUrl = 'http://magento2.test/customer/account/login/referer/aHR0cDovL21hZ2VudG8yLnRlc3QvYmxvZy9wb3N0L3Rlc3QtdGVzdC5odG1s/'
                require(['commentChanged']);
                //  let commentChanged= require(['commentChanged']);
                // commentChanged();
                //  require(['commentChanged'], function(app){
                //      var loginUrl = 'http://magento2.test/customer/account/login/referer/aHR0cDovL21hZ2VudG8yLnRlc3QvYmxvZy9wb3N0L3Rlc3QtdGVzdC5odG1s/'
                //  });

            }
        };
        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/post/comment'
            },

            urlImage: ko.observable('http://magento2.test/pub/media/mageplaza/blog/auth/'),


            initialize: function (config) {
                this._super();
                this.typeComment = ko.observable(config.typeComment);
                this.isLoggedIn = ko.observable(config.isLoggedIn);
                this.loader = ko.observable(config.loader);
                this.comments = ko.observable(config.comments);

                // console.log('post comment')
                // console.log(this.comments())
                // console.log(this.isLoggedIn())
                // console.log(this.typeComment())

            }

        });

    }
);
