$(document).ready(function () {

    "use strict";
    
    $("a[href='#contact']").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, "slow");
        return false;
    });

});
