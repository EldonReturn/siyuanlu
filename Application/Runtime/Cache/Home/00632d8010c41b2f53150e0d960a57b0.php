<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="resources/home/css/index.css">
<script type="text/javascript" src="resources/home/js/jquery.js"></script>
<script type="text/javascript" src="resources/home/js/news_pane.js"></script>
</head>
<script type="text/javascript">

var data = <?php echo ($data); ?>;

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