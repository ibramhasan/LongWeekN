// JQ ADit
$(document).ready(function(){

});








// JQ HASAN
// halaman utama
$(document).ready(function(){
	$("#button").mouseenter(function(){
		$("#button").animate({opacity:'1.0'},"slow");
			$("#button").mouseleave(function(){
				$("#button").animate({opacity:"0.4"},"slow");
			});
		});
	});
	// button

	$("#text").mouseenter(function(){
		$("#text").animate({fontSize:"2rem"},"slow");
			$("#text").mouseleave(function(){
				$("#text").animate({fontSize:"1rem"},"slow");
			});
		});
	// teks

	$("#foto1").mouseenter(function(){
		$("#teks1").slideUp("slow").slideDown("slow");
	});
	$("#foto2").mouseenter(function(){
		$("#teks2").slideUp("slow").slideDown("slow");
	});
	$("#foto3").mouseenter(function(){
		$("#teks3").slideUp("slow").slideDown("slow");
	});
	// foto 1

	$("#pict1").mouseenter(function(){
		$("#pict1").animate({widht:"360px", height:"360px"},"slow");
			$("#pict1").mouseleave(function(){
				$("#pict1").animate({widht:"350px",height:"350px"},"slow")
			});
		});
	$("#pict2").mouseenter(function(){
		$("#pict2").animate({widht:"360px", height:"360px"},"slow");
			$("#pict2").mouseleave(function(){
				$("#pict2").animate({widht:"350px",height:"350px"},"slow")
			});
		});
	$("#pict3").mouseenter(function(){
		$("#pict3").animate({widht:"360px", height:"360px"},"slow");
			$("#pict3").mouseleave(function(){
				$("#pict3").animate({widht:"350px",height:"350px"},"slow")
			});
		});
// blog
$(document).ready(function(){
	$("#klik").click(function(){
		$(".carousel-inner").slideToggle("slow");
	});
});


// JQ TAUFIK
$(document).ready(function(){

});



