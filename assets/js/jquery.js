
function responsiveMenu() {
    $('.menuTitle').click(function() {
        $('.menu').slideToggle("slow");
        $('.menu').css({
            "max-height": "800px"
        });
    });
};

$(function() {
    $(".menu").css({
        "display": "none",
        "transition": "none",
        "max-height": "inherit"
    });
    $("#toggleMenu").remove();
    responsiveMenu();
});
// Mangoo animation
$(".item").hover(
    function() {

        $(this).find('.bottom-image').toggle(0);
        $(this).find('.top-image').fadeIn(0);
    },
    function() {

        $(this).find('.bottom-image').toggle(0);
        $(this).find('.top-image').fadeOut(0);
    }
);




/*// mangoo team

$(function() {
    $('.item').click(function() {
        $('.descHidem').slideToggle();

    })

});*/

//mangoo team 3 columns

$(function() {
    $('#art').click(function() {
        $('#artT').slideToggle();

    })

});

$(function() {
    $('#decors').click(function() {
        $('#decorsT').slideToggle();

    })

});

$(function() {
    $('#identite').click(function() {
        $('#identiteT').slideToggle();

    })

});

$(function() {
    $('#buttonPack').click(function() {
        $('#packs').slideToggle();

    })

});
$(function() {
    $('#buttonConditions').click(function() {
        $('#conditions').slideToggle();

    })

});
$(function(){
    $('#packs').hide();
});

$(function(){
    $('#conditions').hide();
});

//curent page

$(function() {
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('current');
        }
    });
});

//redirect teamhtml


$(function () {
      $(".item").click(function () {
          window.location.href ="http://mangoopickle.be/team.html";
      })
})