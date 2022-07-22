define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/monthly/monthly-widget'
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
                this.monthly = ko.observableArray(myArray);

                // console.log(myArray)
                // console.log('myArray')
                // console.log(this.urls())
                // console.log(this.labels())


            }


        });

    }
);
