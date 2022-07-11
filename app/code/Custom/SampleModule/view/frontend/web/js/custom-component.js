define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Custom_SampleModule/knockout-test'
            },
            showPopup: ko.observable(false),
            urlCheckout: ko.observable('http://magento2.test/checkout/'),
            urlHome: ko.observable('http://magento2.test/'),
            selectedColor: ko.observable(),
            disabledButton: ko.observable(false),
            chosenColor: ko.observable(),
            chosenSize: ko.observable(),
            chosenQuantity: ko.observable(1),
            // colors: ko.observable(new Set(this.options.color)),
            marginSlider: ko.observable(3),
            styling: ko.observable(
                {
                    'transform': 'translateX(0)'
                }
            ),

            changeViewPopup: function (state) {
                this.showPopup(state)
            },
            openUrl: function (urlii) {
                // console.log(urlii)
                window.location.href = urlii;
            },
            isDisabledSize: function (data) {
                if (this.chosenColor()) {
                    const color = this.chosenColor()
                    console.log(this.chosenColor())
                    // let isEnabled = true;
                    let isEnabled = this.options().some(function (elem) {
                        if (elem.color === color && elem.size === data) {
                            return true
                        }
                    });
                    // console.log(isEnabled)
                    return !isEnabled
                } else {
                    console.log('nije izabrana boja')
                    return false
                }

            },
            isDisabledColor: function (data) {
                if (this.chosenSize()) {
                    const size = this.chosenSize()
                    console.log(this.chosenSize())
                    // let isEnabled = true;
                    let isEnabled = this.options().some(function (elem) {
                        if (elem.size === size && elem.color === data) {
                            return true
                        }
                    });
                    // console.log(isEnabled)
                    return !isEnabled
                } else {
                    console.log('nije izabrana velicina')
                    return false
                }

            }
            , changeSlide: function () {
                let translate = 'translateX(-' + this.marginSlider() + '00%)'
                this.styling({'transform': translate})

            }
            ,
            leftClass: ko.observable(false),
            previousProduct: function () {
                var current = this.marginSlider()
                this.selectedColor(null);
                this.chosenColor(null);
                this.chosenSize(null);
                // console.log('previous');
                if (current > 0) {
                    this.marginSlider(current - 1);
                    this.changeSlide();
                    this.leftClass(true);
                }
            },
            rightClass: ko.observable(false),
            nextProduct: function () {
                // this.styling({'transform': 'translateX(0)'})
                var current = this.marginSlider()
                this.selectedColor(null);
                this.chosenColor(null);
                this.chosenSize(null);
                // console.log('next');
                if (current < this.products().length - 1) {
                    this.marginSlider(current + 1);
                    // console.log(this.marginSlider())
                    this.changeSlide();
                    this.rightClass(true);
                }
            },
            getFormKey: function () {
                return jQuery.cookie('form_key');
            },
            addService: function (url) {
                // console.log("url: ", url);
                // console.log(this.selectedColor())
                const formKey = jQuery.cookie('form_key');
                const formData = new FormData();
                formData.append('form_key', formKey)
                console.log(this.chosenColor(), ' && ', this.chosenSize())
                if (this.chosenColor() && this.chosenSize()) {
                    formData.append('super_attribute[93]', this.chosenColor())
                    formData.append('super_attribute[144]', this.chosenSize())
                }
                formData.append('qty', this.chosenQuantity())
                // if (this.selectedColor()) {
                //     formData.append('super_attribute[93]', this.selectedColor().color)
                //     formData.append('super_attribute[144]', this.selectedColor().size)
                // }
                // const self = this;
                this.showPopup(true)
                // this.showPopup(false)
                $.ajax({
                    type: "POST",
                    url: url,
                    processData: false,
                    contentType: false,
                    data: formData,
                    enctype: 'multipart/form-data',
                    success: function (msg) {
                        console.log("Product added to cart ");
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("some error");
                    }
                })
                this.selectedColor(null);
                this.chosenColor(null);
                this.chosenSize(null);
            },

            initialize: function (config) {
                this._super();

                this.products = ko.observableArray(Object.values(config.items));
                this.urls = ko.observableArray(config.itemUrls);
                this.options = ko.observableArray(config.options);
                this.title = ko.observable(config.title);
                this.text = ko.observable(config.text);
                console.log('config.title');
                console.log(config.title);
                // let result = config.options.map(a => a.color);
                // console.log(result)
                console.log(config.options);
                for (let i = 0; i < this.products().length; i++) {
                    this.products()[i]['urlCart'] = config.itemUrls[i]
                    console.log(this.products()[i])
                    // console.log('dddd')
                }

                let uniqueColors = []
                let uniqueSize = []
                config.options.map(item => {
                    uniqueColors.push(item.color);
                    uniqueSize.push(item.size);

                });

                uniqueColors = [...new Set(uniqueColors)]
                uniqueSize = [...new Set(uniqueSize)]
                this.optionColors = ko.observableArray(uniqueColors);
                // this.chosenSize = ko.observable(170);
                this.optionSizes = ko.observableArray(uniqueSize);
                console.log(uniqueColors)
                console.log(uniqueSize)
                console.log('val vsdfvfds')
                // this.options().map(function (elem) {
                //     if (elem.color === this.selectedColor() && elem.size === 167) {
                //         console.log("true")
                //     } else
                //         console.log("false")
                //
                // });
            }


        });

    }
);
