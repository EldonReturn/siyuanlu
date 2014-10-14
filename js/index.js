(function($){
	$.NewsPane = function(){
		var news;
		var isAppend;
		var lastIndex;
		var lastBlock;
		var filters;
		var node = $('<div class="news_area"></div>');

		this.load = function(data){
			isAppend = false;
			news = data;
		};
		this.append = function(data){
			isAppend = true;
			lastIndex = !news ? news.length : 0;
			news = news.concat(data);
		};
		this.refresh = function(){
			if(!news || news.length == 0) return;
			if(!isAppend){
				buildNodes();
			}else{
				if(lastIndex == news.length) return;

			}
		};
		this.getNode = function(){
			return node;
		};
		this.getData = function(){
			return news;
		};

		var buildNodes = function(index){
			var len = news.length;
			for (var i = index; i < len; i++) {
				var block = $('<ul class="news_block"></ul>');
				var j = i%9;
				var d = news[i];
				var item = $('<li class="news_item news_item_' + j + '">' + 
					'<div class="news_item_container">' +
					'<a href="#">' +
					'<div class="news_item_clickable">' +
					'<img src="' + d.img + '" class="news_item_image">' +
					'<h3 class="news_item_title">' + d.title + '</h3>' +
					'</div>' +
					'</a>' +
					(j == 0 || j == 5 ? '<p class="news_item_text">' + d.text + '</p>' : '') +
					'<div class="news_item_stat">' + d.date + ' | <a href="#" class="news_item_cat">' + d.cat + '</a></div>' +
					'</li>');
				block.append(item);
				if(j == 0) node.append(block);
				lastBlock = block;
			}
		};
	};
})(jQuery);

$(document).ready(function(){
	var news = new $.NewsPane();
	news.load(data);
	news.refresh();
	$('body').append(news.getNode());
});