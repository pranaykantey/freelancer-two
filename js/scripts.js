$(document).ready(function(){
    // inititatization of wow.js
    new WOW().init();
    // typed.js implementation
    var options = {
        strings: ["Sutherland Shire Apps"],
        typeSpeed: 120,
        loop: true,
        backDelay: 10000,
        cursorChar: '|'
    }
    var typed = new Typed(".typed", options);
});