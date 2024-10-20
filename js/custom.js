Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */

(function ($) {
    jQuery.fn.reverse = [].reverse;

    /** Disable re-submitting form feature */
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    $(document).on('click', 'button#change_geispoint', function () {
        $('#geis_container').html('' +
            '<input type="text" class="form-control" id="geis_point" placeholder="PSČ" maxlength="5">' +
            '<button type="button" class="btn btn-primary" style="margin-right: 0">Hledat</button>' +
            '<ul class="psc_results" style="margin-top: 15px;max-height: 273px;overflow: auto;"></ul>');
    });

    // $(document).ready(function () {
    //     if ($('span.check_for_psc').length && !$('span.check_for_psc').data('check').is(':empty')) {
    //         $('#geis_container').html('' +
    //             '<input type="text" class="form-control" id="geis_point" placeholder="PSČ" maxlength="5">' +
    //             '<ul class="psc_results" style="margin-top: 15px;max-height: 273px;overflow: auto;"></ul>');
    //     }
    // });

    function delay(callback, ms) {
        var timer = 0;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback.apply(context, args);
            }, ms || 0);
        };
    }

    $('#geis_container > input#geis_point').keyup(delay(function (e) {
        var psc = $('#geis_point').val();
        // var country = $('#country-list-shipping').val();
        if (psc.length == 5) {
            if ($('.geis_error_message').length) {
                $('.geis_error_message').remove();
            }
            
            // $.getJSON("https://pickup.dpd.cz/api/get-parcel-shops-by-address?address=" + psc, function (result) {
            //     $('#geis_loader').html('<img src="/loading.gif" width="30px" height="30px">');
            // }).done(function (result) {
            //
            //     const items = result.data.items;
            //
            //     $('#geis_loader').html('');
            //     $('.geis_error_message').html('');
            //
            //     var list_items = '';
            //     $.each(items, function (index, item) {
            //         if (~psc.indexOf(item['postcode'])) {
            //             list_items += '<li style="padding:10px 50px 10px 10px;cursor:pointer;" data-idgp="' + item['id'] + '" data-company="' + item['company'] + '" data-street="' + item['street'] + ' ' + item['house_number'] + '" data-city="' + item['city'] + '" data-psc="' + item['postcode'] + '"><b>' + item['company'] + '</b><br>' + item['street'] + ' ' + item['house_number'] + ' ' + item['city'] + ', ' + item['postcode'] + '</li>';
            //         }
            //     });
            //     if (list_items === '') {
            //         $('#geis_container .psc_results').html('Nebyly nalezeny žádné výsledky. Zkuste to prosím znovu.');
            //     } else {
            //         $('#geis_container .psc_results').html(list_items);
            //     }
            // }).fail(function () {
            //     $('#geis_container .geis_error_message').html('<span style="color:#ff0000;">Něco se pokazilo, zkuste to prosím znovu.</span>');
            // });

            const country = $("#country-list-shipping option:selected").val();

            // $.ajax({
            //     type: "POST",
            //     url: 'https://pickup.dpd.cz/api/get-all?country=' + country + '&lang=en',
            //     beforeSend: function () {
            //         $('#geis_loader').html('<img src="/loading.gif" width="30px" height="30px">');
            //     },
            //     success: function (result) {
            //
            //         const items = JSON.parse(result).data.items;
            //
            //         $('#geis_loader').html('');
            //         $('.geis_error_message').html('');
            //
            //         var list_items = '';
            //         $.each(items, function (index, value) {
            //             if (~psc.indexOf(value['postcode'])) {
            //                 list_items += '<li style="padding:10px 50px 10px 10px;cursor:pointer;" data-idgp="' + value['id'] + '" data-company="' + value['company'] + '" data-street="' + value['street'] + ' ' + value['house_number'] + '" data-city="' + value['city'] + '" data-postcode="' + value['postcode'] + '"><b>' + value['company'] + '</b><br>' + value['street'] + ' ' + value['house_number'] + ', ' + value['city'] + ', ' + value['postcode'] + '</li>';
            //             }
            //         });
            //         if (list_items === '') {
            //             $('#geis_container .psc_results').html('Nebyly nalezeny žádné výsledky. Zkuste to prosím znovu.');
            //         } else {
            //             $('#geis_container .psc_results').html(list_items);
            //         }
            //     },
            //     error: function () {
            //         $('#geis_container .geis_error_message').html('<span style="color:#ff0000;">Něco se pokazilo, zkuste to prosím znovu.</span>');
            //     }
            // });

            $.ajax({
                type: "POST",
                url: 'https://pickup.dpd.cz/api/get-all?country=' + country + '&lang=en',
                beforeSend: function () {
                    $('#geis_loader').html('<img src="/loading.gif" width="30px" height="30px">');
                },
                success: function (result) {

                    const items = JSON.parse(result).data.items;

                    $('#geis_loader').html('');
                    $('.geis_error_message').html('');

                    var list_items = '';
                    $.each(items, function (index, value) {
                        if (~psc.indexOf(value['postcode'])) {
                            list_items += '<li style="padding:10px 50px 10px 10px;cursor:pointer;" data-idgp="' + value['id'] + '" data-company="' + value['company'] + '" data-street="' + value['street'] + ' ' + value['house_number'] + '" data-city="' + value['city'] + '" data-postcode="' + value['postcode'] + '"><b>' + value['company'] + '</b><br>' + value['street'] + ' ' + value['house_number'] + ', ' + value['city'] + ', ' + value['postcode'] + '</li>';
                        }
                    });
                    if (list_items === '') {
                        $('#geis_container .psc_results').html('Nebyly nalezeny žádné výsledky. Zkuste to prosím znovu.');
                    } else {
                        $('#geis_container .psc_results').html(list_items);
                    }
                },
                error: function () {
                    $('#geis_container .geis_error_message').html('<span style="color:#ff0000;">Něco se pokazilo, zkuste to prosím znovu.</span>');
                }
            });
        } else {
            $('#geis_loader').html('');
            $('#geis_container .geis_error_message').html('<span style="color:#ff0000;">Zadejte PSČ ve správném formátu!</span>');
        }
    }, 1000));

    // $(document).on('click', 'button.quantity-up, button.quantity-down', function () {
    //     if ($("#product-quantity").val() >= 5 || !$.isNumeric($("#product-quantity").val())) {
    //         $('#basket').submit();
    //     } else {
    //         // $("#product-quantity").val(5);
    //     }
    // })

    $(document).on('change', '#country-list-shipping', function () {
        $('#del_first').val('');
        $('#del_last').val('');
        $('#del_company').val('');
        $('#del_line1').val('');
        $('#del_town').val('');
        $('#del_postcode').val('');
        $('#delivery-address #country-list').val('');
        $('#delivery_state').val('');

        $('#basket').submit();
    });

    $(document).on('click', '#geis_container .psc_results > li', function () {
        $(this).addClass('active').siblings().removeClass('active');

        const country = $("#country-list-shipping option:selected").val();

        $.ajax({
            type: "POST",
            url: 'https://pickup.dpd.cz/api/get-all?country=' + country + '&lang=en',
            success: function (result) {

                const items = JSON.parse(result).data.items;

                $.each(items, function (index, item) {
                    if (~$('#geis_container .psc_results > li.active').data('idgp').indexOf(item['id'])) {
                        $('#del_first').val('WEDO');
                        $('#del_last').val('Pickup');
                        $('#del_company').val(item['company']);
                        $('#del_line1').val(item['street']+" "+item["house_number"]);
                        $('#del_town').val(item['city']);
                        $('#del_postcode').val(item['postcode']);
                        $('#delivery-address #country-list').val(country);
                        $('#delivery_state').val(country);
                    }
                });

                if (!$('body').hasClass("logged-in")) {
                    $('#basket').submit();
                }
            }
        });
    });

    $(document).on('change', '#shipping-values', function () {
        if ($('#shipping-values option:selected:contains(POINT)').length) {
            $('#geis_container').show();
            $('#geis_container').addClass('active');
            if ($('#delivery_is_billing').is(':checked')) {
                $('#delivery_is_billing').attr('checked', false);
            }
            $('#delivery_is_billing').parent().removeClass('checked');
            if ($('#delivery-address').hasClass('in')) {
                $('#delivery-address').removeClass('in')
            }
            $('#delivery_display').hide();

            if ($('select#delivery_address').length) {
                $('select#delivery_address').hide();
                $('.delivery_address_change').hide();
                $('select#delivery_address').attr('name', 'undefined');
                $('.include_hidden_geispoint').append('<input type="hidden" name="hidden_geispoint" class="hidden_geisinput" value="1"/>');
            }
        } else {
            if (!$('#delivery_is_billing').is(':checked')) {
                $('#delivery_is_billing').attr('checked', true);
                $('#delivery-address').css('height', 'auto');
                if ($('#delivery-address').hasClass('in')) {
                    $('#delivery-address').removeClass('in')
                }
            }
            $('#delivery_is_billing').parent().addClass('checked');
            $('#geis_container').hide();
            $('#geis_container').removeClass('active');
            $('#delivery_display').show();

            if ($('select#delivery_address').length) {
                $('select#delivery_address').show();
                $('select#delivery_address').attr('name', 'delivery_address');
                $('.include_hidden_geispoint .hidden_geisinput').remove();
            }
        }
    }).trigger('change');

    $(document).ready(function() {
        let selectedID = localStorage.getItem('selectedID');
        if (selectedID) {
            setBranch();
        }
    });

    function setBranch() {
        $.getJSON('https://bridge.intime.cz/public/branches/branches.json', function(data) {
            $.each(data.intime, function (index, item) {

                let currentSelectedID = localStorage.getItem('selectedID');

                $.each(item, function (index, obj) {
                    if (obj.code == currentSelectedID) {
                        // Non-logged
                        $('#addr_company').val(obj.name); // Company Name
                        $('#addr_line1').val(obj.address.street+' '+obj.address.number); // Address
                        // $('#addr_line2').val(''); // Note
                        $('#addr_town').val(obj.address.town); // City
                        $('#addr_postcode').val(obj.address.postal_code); // Zipcode
                        $('#shipping-address-content #country-list').val((obj.address.country == 'CZ' ? 203 : 703)); // Country
                    }
                });
            });
            localStorage.removeItem('selectedID');
        });
    }

    window.addEventListener("message", function(event) {
        localStorage.setItem('selectedID', event.data.selectedID);
        setBranch();
    }, false);

    $(document).on('submit', 'form#basket', function (e) {
        if ($('#country-list-shipping option:selected').val() === "") {
            e.preventDefault();
            alert('Musíte vybrat způsob dopravy!');
        } else {
            if ($('#shipping-values option:selected:contains(Pickup)').length && ($('#geis_container .psc_results > li:not(.active)') && !$('#change_geispoint').length)) {
                var elementList = $('#geis_container .psc_results > li');

                if (!elementList.hasClass('active')) {
                    e.preventDefault();
                    alert('Musíte vybrat místo vyzvednutí pro službu WEDO POINT!');
                } else {
                    $('#geis_container').removeClass('active');
                }
            }
        }
    });

    $(document).ready(function () {

        //(+) common.js
        $('select.update_form').change(function () {
            //$('input.required').removeClass('required');
            $(this).parents('form').submit();
        });

        //if ($('div#basket_summary').exists()) {
        $('form.addForm').submit(function (e) {
            if ($('.option_select').length && !$('.option_select').val() || $('#amount').length && $('#amount').val() < 800 || $('.ozubeni_select').length && !$('.ozubeni_select').val()) {
                e.preventDefault();
                alert('Prosím zvolte požadované volby/varianty před přidáním do košíku.');
            } else {
                //This is from the required form checker
                var form_error = false;
                if (form_error) {
                    return false;
                }

                var add = $(this).serialize();
                var action = $(this).attr('action').replace('?_a=saleitems', '');
                var basket = $('div.slimScrollDiv ul.scroller');
                // added to accommodate no existing query string
                var parts = action.split("?");
                if (parts.length > 1) {
                    action += "&";
                } else {
                    action += "?";
                }

                //$.debug(action);
                $.ajax({
                    url: action + '_taox_app=ajaxadd',
                    type: 'POST',
                    cache: false,
                    data: add,
                    complete: function (returned) {
                        if (returned.responseText.match("Redir")) {
                            //$.debug(returned);
                            window.location = returned.responseText.substr(6);

                        } else {

                            $("html, body").animate({scrollTop: 0}, "slow", function () {
                                //$(".top-cart-content").show(0);
                                var color = true;
                                var x = 0;
                                var intervalID = setInterval(function () {
                                    $(".top-cart-info").css("background-color", function () {
                                        color = !color;
                                        return color ? "rgb(255, 233, 200)" : "#f9f9f9"
                                    });

                                    if (++x === 9) {
                                        window.clearInterval(intervalID);
                                    }

                                }, 500)

                            });

                            //$(".top-cart-info").effect("shake", { times:2, distance: 2 }, 70)
                            var resp = jQuery.parseJSON(returned.responseText);
                            $('.top-cart-info-count').html(resp[0]);
                            $('.top-cart-info-value').html(resp[1]);
                            basket.html(resp[2]);
                            //Remove error message if it exists
                            //$("#gui_message").slideUp();

                        }
                    }
                });
                return false;
            }
        });
        //}
    });

    /** Ozubení **/
    $(document).on('change', '.vyber_pasu', function () {
        if ($('.vyber_pasu').length && !$('.vyber_pasu').val()) {
            $('#ozubeni_container').hide();
        } else {
            $('#ozubeni_container').show();
        }
    });

    /** Popover */
    $(document).on('mouseenter', 'form .label_popover', function () {
        $(this).append('<span>' + $(this).data('pop') + '</span>');
    }).on('mouseleave', 'form .label_popover', function () {
        $(this).find('span').remove();
    });

    /** Quantity input on focusout automatically set 5 as default */
    $( ".product-quantity input" ).each(function(index) {
        $(this).on("keyup focusout change", function(){
            let min = parseInt($(this).attr("min"));
            console.log(min);
            if (parseInt($(this).val()) < min || !$.isNumeric($(this).val())) {
                $(this).val(min)
            }
            // if ($(this).val() < 5 && $(this).attr("min") == 5 || !$.isNumeric($(this).val()) && $(this).attr("min") == 5) {
            //     $(this).val(5);
            // } else {
            //     if ($("#product-quantity").val() == 0) {
            //         $(this).val(1);
            //     }
            // }
        });
    });
})(jQuery);


/* Comparison */

//var CompArray = [];
function ComparisonAdd(b) {
    var a = "#comfixBar";
    $(a).is(":hidden") && $(a).show();
    var h = $("#comfixBar .body .comparison");
    if (h.length > 0) {
        var f = $("#img" + b);
        var j = h.offset().left,
            k = h.offset().top,
            g = $('<img src="' + f.attr("src") + '" alt="cmpimg" title="cmpimg" class="cmpimg" />');
        $("#taoxCompFixB").append(g);
        g.css({
            position: "absolute",
            top: f.offset().top,
            left: f.offset().left,
            width: "190px"
        });
        g.animate({
            left: j + 50,
            top: k,
            height: "20px",
            width: "20px",
            opacity: "0"
        }, 1000, "linear", function () {
            g.remove();
            //if(CompArray.indexOf(b) == -1)
            //{
            $.post("/?_a=comparison", {add_comp: b}, function (d) {
                $(".count").text(d);
                //$(".count").text(parseInt($(".count").text())+1);
                //CompArray.push(b);
            });
            //}
        })
    }
}


/*! jquery.cookie v1.4.1 | MIT */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function (a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {
        }
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }

    var g = /\+/g, h = a.cookie = function (e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires, k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    };
    h.defaults = {}, a.removeCookie = function (b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
    }
});