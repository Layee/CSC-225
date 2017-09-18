// ======= PROJECT INFO OVERLAY =======

var overlay = $("<div id='overlay'><div class='container'><div class='row'><div class='col-sm-7'><img></div><div class='col-sm-5'></div><button type='button' class='btn btn-default pull-right'><span class='icon-close'></span>&nbsp;Close</button></div></div></div>");

$("body").append(overlay);

$("#projects a").click(function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    var projectInfo = $(this).next().html();

    $("body").css("overflow", "hidden");
    $("#overlay img").attr("src", href);
    $("#overlay .col-sm-5").html(projectInfo);
    overlay.fadeIn("fast");
});


$("#overlay button").click(function () {
    overlay.fadeOut("fast", function(){
        $('body').css("overflow-y", "scroll");
    });
});


// ======= SMOOTH SCROLLING =======

var links = $("a[href^='#']");

links.click(function (event) {
    event.preventDefault();
    var id = $(this).attr("href");
    var position = $(id).offset().top - 49;

    if (id === "#page-top") {
        $("html, body").animate({scrollTop: 0});
    } else {
        $("html, body").animate({scrollTop: position});
    }
});


// ======= SCROLLSPY =======

$('body').scrollspy({ target: '#navigation', offset: 52 });


// ======= FORM VALIDATION =======

var requiredInputs = $('input, textarea');

requiredInputs.blur(function () {
    if ($(this).val() == ""){
        $(this).prev().fadeIn();
    } else {
        $(this).prev().fadeOut();
    }
}).keyup(function (event) {
    if (event.which !== 9){
        if ($(this).val() == ""){
            $(this).prev().fadeIn();
        } else {
            $(this).prev().fadeOut();
        }
    }
});


// ======= FIXED NAV IOS FIX =======

var viewportWidth = $(window).width();

if (Modernizr.touch && viewportWidth < 769){
    requiredInputs.focus(function() {
        $('nav').hide();
    }).blur(function() {
        $('nav').show();
    });
} else {
    $('nav').show();
}



