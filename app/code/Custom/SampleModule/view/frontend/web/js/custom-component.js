define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Custom_SampleModule/knockout-test'
            },
            showPopup: ko.observable(false),
            showMoreProducts: ko.observable(false),
            productsByCategory: ko.observableArray(),
            urlCheckout: ko.observable('http://magento2.test/checkout/'),
            urlHome: ko.observable('http://magento2.test/'),
            selectedColor: ko.observable(),
            disabledButton: ko.observable(false),
            chosenColor: ko.observable(),
            chosenSize: ko.observable(),
            chosenQuantity: ko.observable(1),
            // colors: ko.observable(new Set(this.options.color)),
            marginSlider: ko.observable(0),
            styling: ko.observable(
                {
                    'transform': 'translateX(0)'
                }
            ),

            changeViewPopup: function (state) {
                this.showPopup(state)
                this.productsByCategory([])
                this.showMoreProducts(false)
            },
            changeViewMoreProducts: function () {
                if (this.showMoreProducts()) this.showMoreProducts(false)
                else this.showMoreProducts(true)

                // console.log(this.showMoreProducts())
            },
            openUrl: function (urlii) {
                // console.log(urlii)
                window.location.href = urlii;
            },
            isDisabledSize: function (data) {
                if (this.chosenColor()) {
                    const color = this.chosenColor()
                    // console.log(this.chosenColor())
                    // let isEnabled = true;
                    let isEnabled = this.options().some(function (elem) {
                        if (elem.color === color && elem.size === data) {
                            return true
                        }
                    });
                    // console.log(isEnabled)
                    return !isEnabled
                } else {
                    // console.log('nije izabrana boja')
                    return false
                }

            },
            isDisabledColor: function (data) {
                if (this.chosenSize()) {
                    const size = this.chosenSize()
                    // console.log(this.chosenSize())
                    let isEnabled = this.options().some(function (elem) {
                        if (elem.size === size && elem.color === data) {
                            return true
                        }
                    });
                    // console.log(isEnabled)
                    return !isEnabled
                } else {
                    // console.log('nije izabrana velicina')
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
            addService: function (url, id, productId) {
                // console.log("url: ", id);
                // console.log(this.selectedColor())
                const formKey = jQuery.cookie('form_key');
                const formData = new FormData();
                formData.append('form_key', formKey)
                // console.log(this.chosenColor(), ' && ', this.chosenSize())
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
                const self = this;
                if (productId) url = url + productId;
                $.ajax({
                    type: "POST",
                    url: url,
                    processData: false,
                    contentType: false,
                    data: formData,
                    enctype: 'multipart/form-data',
                    success: function (msg) {
                        console.log("Product added to cart !");
                        self.getProductByCategory(id);

                        // console.log(msg);
                        // this.getProductByCategory();

                        // console.log(self.productsByCategory());
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("some error");
                    }
                })
                this.selectedColor(null);
                this.chosenColor(null);
                this.chosenSize(null);
            },
            getProductByCategory: function (id) {
                self = this;
                $.ajax({
                    type: "GET",
                    url: 'http://magento2.test/rest/V1/products?' +
                        'searchCriteria[filterGroups][0][filters][0][field]=type_id&' +
                        'searchCriteria[filterGroups][0][filters][0][conditionType]=eq&' +
                        'searchCriteria[filterGroups][0][filters][0][value]=simple&' +
                        'searchCriteria[filterGroups][1][filters][0][field]=category_id&' +
                        'searchCriteria[filterGroups][1][filters][0][conditionType]=eq&' +
                        'searchCriteria[filterGroups][1][filters][0][value]=' +
                        id +

                        '&searchCriteria[sortOrders][0][field]=created_at&' +
                        'searchCriteria[sortOrders][0][direction]=DESC&%20searchCriteria[pageSize]=5&%20searchCriteria[currentPage]=1',
                    // url: 'http://magento2.test/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=category_id&%20searchCriteria[filterGroups][0][filters][0][value]=' +
                    //     id +
                    //     '&%20searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][field]=created_at&%20searchCriteria[sortOrders][0][direction]=DESC&%20searchCriteria[pageSize]=5&%20searchCriteria[currentPage]=1',
                    processData: false,
                    contentType: false,


                    success: function (msg) {
                        // console.log(msg.items)
                        // self.productsByCategory.push(msg.items);
                        $.map(msg.items, function (product) {
                            // console.log(product.custom_attributes[0].value)
                            console.log(product)
                            self.productsByCategory.push(product);
                        });
                        // console.log(self.productsByCategory());
                        // console.log("Product getter ");
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("some error getter");
                    }
                })

            },

            initialize: function (config) {
                this._super();
                // this.getProductByCategory();
                this.products = ko.observableArray(Object.values(config.items));
                this.urls = ko.observableArray(config.itemUrls);
                // this.categoryIds = ko.observableArray(config.itemCategoryId);
                this.options = ko.observableArray(config.options);
                this.title = ko.observable(config.title);
                this.text = ko.observable(config.text);
                // console.log(config.itemCategoryId);
                // console.log(config.options);
                for (let i = 0; i < this.products().length; i++) {
                    this.products()[i]['urlCart'] = config.itemUrls[i]
                    this.products()[i]['category_id'] = config.itemCategoryId[i]
                    // console.log(this.products()[i])
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
                // console.log(uniqueColors)
                // console.log(uniqueSize)

            }


        });

    }
);
