$(function () {

    var flipped = {'entresse': false};

    $(".shop").fadeOut();
    $(".mall").fadeOut();



    $('#entresseico').click(function () {

        open("entresse");
    });

    $('#espoontoriico').click(function () {

        open("espoontori");
    });

    $('.shop-view').click(function () {
    	inside($(this).parent().parent().attr("id"));
    });



    $('.shop-close').click(function () {
    	close($(this).parent().attr("id"));
    });

    function close (shop) {
    	$("#" + shop).slideUp();
    	setTimeout(function () {
    		$("#" + shop + "ico").slideDown();
    	}, 400);
    }

    function open (shop) {
    	$("#" + shop).slideDown();
        $("#" + shop).css('visibility', 'visible');
        $("#" + shop + "ico").slideUp();
    }

    function inside (mall) {
    	$("#" + mall + "mall, .mall").fadeIn();
    	$("#" + mall + "mall, .mall").css("visibility", "visible");
    }

    function outside () {

    }
});
