<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="resources/home/css/index.css">
<script type="text/javascript" src="resources/home/js/jquery.js"></script>
<script type="text/javascript" src="resources/home/js/news_pane.js"></script>
</head>
<script type="text/javascript">

var data = {hasMore:true, data:[{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'},
			{img:'resources/home/images/sample.jpg', title:'2015 春季时装秀掠影', text:'备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。', date: '10月18日', cat: '时尚'}]};

var news = new $.NewsPane();

$(document).ready(function(){
	news.load(data);
	news.refresh();
	$('#news').replaceWith(news.getNode());
	$("#more").click(function(){
		news.append(data);
		news.refresh();
		if(!news.hasMore){
			$(this).removeClass("display_none").addClass("display_none");
		}else{
			$(this).removeClass("display_none");
		}
	});
});

</script>
<body>
<div class="header">
Header
</div>
<div id="news"></div>
<div class="news_more" id="more">
	<p class="more">更多</p>
</div>

</body>
</html>