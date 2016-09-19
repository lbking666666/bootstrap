$(function(){
	/* 下拉导航菜单 */
	$('.navbar-collapse').hover(function(){
		$('.nav-drop').css('visibility','visible');
		$('.nav li').bind('mouseover',function(){
			var index = $(this).index() - 1;
			if(index<=-1){
				$('.nav-drop-wrap').hide();
			}else{
				$('.nav-drop-wrap').eq(index).show().siblings('.nav-drop-wrap').hide();
			}
		});
	},function(){
		$('.nav-drop').css('visibility','hidden');
		$('.nav-drop-wrap').hide();
	});
	$(".nav li a").click(function(){
		//点击时隐藏下拉菜单
		$('.nav-drop').css('visibility','hidden');
		//鼠标滑过显示下拉菜单
		$(".nav li a").mouseover(function(){
			$('.nav-drop').css('visibility','visible');
		});
		//添加当前的样式，去掉其他的当前样式
		$(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
		//获得点击的对应的模块
		 var target = $(this).attr("href");
		 if(target != '#'){
			 var targetScroll = $(target).offset().top - 130;
			 $("html,body").animate({scrollTop:targetScroll},300);
			 $('.header-top').addClass('navbar-fixed-top');
			$(window).scroll(function(){
				var targetTop = $(this).scrollTop();
				if (targetTop == 0){
					$('.header-top').removeClass('navbar-fixed-top');
					$('.nav li a').removeClass('active');
					$('.nav li:first a').addClass('active');
				}
			 });
		 }else{
			 $("html,body").animate({scrollTop:0},300);
			 $('.header-top').removeClass('navbar-fixed-top');
		 }
		 return false;
	});
});