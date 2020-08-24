//Sticky navbar

var navbar = document.getElementById("navbar");
var fixed = navbar.offsetTop;

function stickynavbar() {
    "use strict";
    if (window.pageYOffset > fixed) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

window.onscroll = function () {
    "use strict";
    stickynavbar();
};

$("a[href='#work']").click(function () {
    "use strict";
    $("html, body").animate({
        scrollTop: $("#work").offset().top
    }, "slow");
    return false;
});

$(document).ready(function () {
    "use strict";
    $("a[href='index.html']").click(function () {
        $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, "slow");
        return false;
    });
});

$(document).ready(function () {
    "use strict";
    $("a[href='index.html#work']").click(function () {
        $("html, body").animate({
            scrollTop: $("#work").offset().top
        }, "slow");
        return false;
    });
});

$(document).ready(function () {
    "use strict";
    $("a[href='index.html#about']").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, "slow");
        return false;
    });
});

$(document).ready(function () {
    "use strict";
    $("a[href='#contact']").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, "slow");
        return false;
    });
});