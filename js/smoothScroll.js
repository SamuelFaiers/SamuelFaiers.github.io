$(document).ready(function () {

    "use strict";
    
    $("a[href='#about']").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, "slow");
        return false;
    });

});