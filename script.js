$(function () {

	$(".shop").fadeOut();
	$(".mall-shop").fadeOut();
	$(".mall").fadeOut();


	$('#entresseico').click(function () {
		open("entresse");
	});

	$('#espoontoriico').click(function () {
		open("espoontori");
	});

	// Entressen Kaupat
		$('#spiceiceico').click(function () {
			open("spiceice");
		});
	
	// Espoontorin Kaupat
		$('#kmarketico').click(function () {
			open("kmarket");
		});

		$('#fitnessico').click(function () {
			open("fitness");
		});

		$('#tokmanniico').click(function () {
			open("tokmanni");
		});

		$('#pepeparturiico').click(function () {
			open("pepeparturi");
		});

	$('.shop-view').click(function () {
		inside($(this).parent().parent().attr("id"));
	});

	$('.mall-exit').click(function () {
		outside();
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
		$("#" + mall + "mall").fadeIn();
		$("#" + mall + "mall").css("visibility", "visible");
	}

	function outside () {
		$('.mall').fadeOut();
	}

});
