define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/tag/tag-widget'
            },


            initialize: function (config) {
                this._super();
                // console.log('monthly')
                this.urls = ko.observableArray(Object.values(config.urls));
                this.labels = ko.observableArray(Object.values(config.labels));
                let myArray = [];
                for (let i = 0; i < this.urls().length; i++) {
                    myArray.push({url: this.urls()[i], label: this.labels()[i]})

                }
                this.tags = ko.observableArray(myArray);

                // console.log('tags')
                // console.log(myArray)
                // console.log(this.urls())
                // console.log(this.labels())


            }


        });

    }
);
