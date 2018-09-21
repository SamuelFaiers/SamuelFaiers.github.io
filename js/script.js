//Sticky header

var header = document.getElementById("header");
var fixed = header.offsetTop;

function stickyheader() {
    "use strict";
    if (window.pageYOffset > fixed) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

window.onscroll = function () {
    "use strict";
    stickyheader();
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
    $("a[href='index.html#contact']").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, "slow");
        return false;
    });
});