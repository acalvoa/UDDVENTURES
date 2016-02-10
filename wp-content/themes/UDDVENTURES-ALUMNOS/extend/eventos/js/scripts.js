(function ($, root, undefined) {
	
	$(function () {
		'use strict';
		$(".EXTEND_eventos .subheader .tipos").on('click',function(){
			$(".EXTEND_eventos .subheader .active").removeClass('active');
			$(this).addClass('active');
			$(".EXTEND_eventos .eventos-container").hide();
			$(".EXTEND_eventos .eventos-container[data-id='"+$(this).attr('data-id')+"']").show();
		});
		// DOM ready, take it away
		$("#eventos .calendar-control-left").on('click',function(){
			if(typeof $(this).parent().parent().prev().attr('class') != "undefined"){
				$(this).parent().parent().hide().prev().show();
			}
		});
		$("#eventos .calendar-control-right").on('click',function(){
			if(typeof $(this).parent().parent().next().attr('class') != "undefined"){
				$(this).parent().parent().hide().next().show();
			}
		});	
		$("#eventos .mark").on('mouseenter', function(e){
			var obj = JSON.parse($(this).attr('data'));
			var p = $('<div class="popover_eventos"></div>').appendTo($('body'));
			var f = $('<div class="poster"></div>').append("<img src='"+obj.image+"'>").appendTo(p);
			var g = $('<div class="over"></div>').append(obj.title).appendTo(p);
			p.css({
				top:$(this).offset().top-210,
				left:$(this).offset().left-60,
			});
		});
		$("#eventos .mark").on('mouseleave', function(e){
			$(".popover_eventos").remove();
		});
		$(".EXTEND_eventos .left-back").on('click',function(){
			window.history.back();
		});
		$("#eventos .mark").on('click', function(e){
			var obj = JSON.parse($(this).attr('data'));
			var p = $('<div class="fadebox"></div>').appendTo($('body'));
			var k = $('<div class="back"></div>').appendTo(p).on('click',function(){
				$(".fadebox").remove();
			});
			var box = $('<div class="box"></div>').appendTo(p);
			var header = $('<div class="header" style="background: '+$(".EXTEND_eventos .header").css('background')+';"><div class="closebtn">Cerrar <i class="fa fa-times"></i></div></div>').appendTo(box);
			$(".closebtn").on('click',function(){
				$(".fadebox").remove();
			});
			var body = $('<div class="body"></div>').appendTo(box);
			var content = $('<div class="contenido"></div>').appendTo(body);
			var foto = $('<div class="foto"></div>').appendTo(body);
			var contfoto = $('<div class="container-foto"></div>').appendTo(foto);
			$("<img src='"+obj.image+"' />").appendTo(contfoto);
			$("<div class='titulo'>"+obj.title+"</div>").appendTo(content);
			var contenido = $("<div class='contenido'>"+obj.content+"</div>").appendTo(content);
			var redes = $("<div class='row social_networks'>").appendTo(foto);
			$(".fadebox .box .contenido").perfectScrollbar();
			var comp = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 title">COMPARTIR</div>').appendTo(redes);
			var icons = $('<div class="content social" ></div>').appendTo(redes);
			var fb = $('<i class="fa fa-facebook-official"></i>').appendTo(icons);
			var tw = $('<i class="fa fa-twitter-square"></i>').appendTo(icons);
			fb.on('click',function(){
				window.open('http://www.facebook.com/share.php?u='+obj.link+'&title='+obj.title, "", "width=800, height=400");
			});
			tw.on('click',function(){
				window.open('hhttp://twitter.com/home?status='+obj.title+'+'+obj.link,"", "width=800, height=400");
			});
		});
	});
	
})(jQuery, this);
