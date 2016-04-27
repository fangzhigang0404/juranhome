'use strict';
$(function() {
	$(function banner() {
		$('.banner ol li').click(function(event) {
			$(this).addClass('current').siblings().removeClass('current');
			var index = $(this).index();
			//alert(index);
			$('.banner ul li').eq(index).stop().fadeIn(600).siblings().stop().fadeOut();
			$('.presentation').eq(index).animate({marginTop:-200}, 600).siblings().animate({marginTop:0}, 400);
			num = index;
		});
		var num = 0;
		var timer = null;
		function autoplay(){
			num++;
			if(num > 5){
				num = 0;
			}
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.banner ul li').eq(num).stop().fadeIn(600).siblings().fadeOut();
			$('.presentation').eq(num).animate({marginTop:-200}, 600).siblings().animate({marginTop:0}, 400);
		}
		timer = setInterval(autoplay, 3500);
		$('.banner').mouseover(function(event) {
			clearInterval(timer);
			$('.banner span').stop().fadeIn();
		});
		$('.banner').mouseleave(function(event) {
			clearInterval(timer);
			timer = setInterval(autoplay, 3500);
			$('.banner span').stop().fadeOut();
		});
		$('.banner-right').click(function(event) {
			num++;
			if(num > 5){
				num = 0;
			}
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.banner ul li').eq(num).stop().fadeIn(600).siblings().fadeOut();
			$('.presentation').eq(num).stop().animate({marginTop:-200}, 600).siblings().stop().animate({marginTop:0}, 400);
		});
		
		$('.banner-left').click(function(event) {
			num--;
			if( num<0 ){
				num=5;
			}
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.banner ul li').eq(num).stop().fadeIn(600).siblings().fadeOut();
			$('.presentation').eq(num).stop().animate({marginTop:-200}, 600).siblings().stop().animate({marginTop:0}, 400);
		});
	});

	
	$('.seek-d .down ol li').click(function(event) {
		$(this).addClass('seek-current').siblings().removeClass('seek-current');
		var index = $(this).index();
		$('.seek-d  .down ul').eq(index).addClass('down-right-up').siblings().removeClass('down-right-up');
	});
	
	/*onload one image*/
	function previewImage(file)
	{
	    var MAXWIDTH  = 200;
	    var MAXHEIGHT = 150;
	    var div = document.getElementById('preview');
	    if (file.files && file.files[0])
	    {
	        div.innerHTML ='<img id=imghead>';
	        var img = document.getElementById('imghead');
	        img.onload = function(){
	            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	            img.width  =  rect.width;
	            img.height =  rect.height;
//	          img.style.marginLeft = rect.left+'px';
//	          img.style.marginTop = rect.top+'px';
	        }
	        var reader = new FileReader();
	        reader.onload = function(evt){img.src = evt.target.result;}
	        reader.readAsDataURL(file.files[0]);
	    }
	    else
	    {
	        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	        file.select();
	        var src = document.selection.createRange().text;
	        div.innerHTML = '<img id=imghead>';
	        var img = document.getElementById('imghead');
	        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
	        div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
	    }
	}
	function clacImgZoomParam( maxWidth, maxHeight, width, height ){
	    var param = {top:0, left:0, width:width, height:height};
	    if( width>maxWidth || height>maxHeight )
	    {
	        rateWidth = width / maxWidth;
	        rateHeight = height / maxHeight;

	        if( rateWidth > rateHeight )
	        {
	            param.width =  maxWidth;
	            param.height = Math.round(height / rateWidth);
	        }else
	        {
	            param.width = Math.round(width / rateHeight);
	            param.height = maxHeight;
	        }
	    }

	    param.left = Math.round((maxWidth - param.width) / 2);
	    param.top = Math.round((maxHeight - param.height) / 2);
	    return param;
	}
});