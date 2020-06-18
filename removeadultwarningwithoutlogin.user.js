// ==UserScript==
// @name           Remove Adult Warning Without Login
// @namespace      com.adult.warning.remover
// @version        1.0
// @author         gvoze32
// @description    Remove page warning without login and verify ages
// @include        http*://*.liputan6.com/*
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @iconURL        http://www.iconarchive.com/download/i79719/martz90/hex/warning.ico
// ==/UserScript==
setInterval(function() {
    $('.adult-popup__wrapper').remove();
    $('.adult-popup__icon').remove();
    $('.adult-popup__content').remove();
    $('.adult-popup').remove();
    $('.adult-popup_verify-age-hide').remove();
}, 1000);