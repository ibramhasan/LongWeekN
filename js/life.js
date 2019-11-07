// JQ ADit









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
	$(document).ready(function(){
		$("#tor").mouseenter(function(){
			$("#tor").animate({opacity:'0.4'},"slow");
				$("#tor").mouseleave(function(){
					$("#tor").animate({opacity:"1.0"},"slow");
				});
			});
		});
		$(document).ready(function(){
			$("#tes").mouseenter(function(){
				$("#tes").animate({opacity:'0.4'},"slow");
					$("#tes").mouseleave(function(){
						$("#tes").animate({opacity:"1.0"},"slow");
					});
				});
			});

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
	$(document).ready(function(){
  $("#hp").click(function(){
    $("#gurih").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#gurih").stop();
  });
});

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
// KARIR
$(document).ready(function(){
	$("#carir1").click(function(){
		$(".img-fluid-1").animate({height:"200px",width:"200px"},"slow");
	});
	$("#carir2").click(function(){
		$(".img-fluid-2").animate({height:"200px",width:"200px"},"slow");
	});
	$("#carir3").click(function(){
		$(".img-fluid-3").animate({height:"200px",width:"200px"},"slow");
	});
	$("#carir4").click(function(){
		$(".img-fluid-4").animate({height:"200px",width:"200px"},"slow");
	});
	$("#carir5").click(function(){
		$(".img-fluid-5").animate({height:"200px",width:"200px"},"slow");
	});
	$("#carir6").click(function(){
		$(".img-fluid-6").animate({height:"200px",width:"200px"},"slow");
	});
});
// case studies
$(document).ready(function(){
	$("#gam1").click(function(){
		$("#gam1").animate({width:"toggle"},"slow")(function(){
			$("#gam1").slideDown("slow");
		});
	});
});




// JQ TAUFIK
    $(document).ready(function(){
      $("#toggle").mouseenter(function(){
        $("#toggle").slideUp(9000).slideDown(5000);
      });
    });
$(document).ready(function(){
	$("#p2").mouseenter(function(){
		$("#p2").slideDown(8000).slideUp(5000);
	});
});
