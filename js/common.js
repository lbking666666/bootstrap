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
});