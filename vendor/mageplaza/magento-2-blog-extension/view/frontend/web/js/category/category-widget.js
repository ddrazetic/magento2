define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Mageplaza_Blog/category/category-widget'
            },


            initialize: function (config) {
                this._super();
                // console.log('monthly')
                var txt = document.createElement("textarea");
                txt.innerHTML = config.tree;

                this.tree = ko.observable(txt.value);

                // console.log('tree')
                // console.log(this.tree())


            }


        });

    }
);
