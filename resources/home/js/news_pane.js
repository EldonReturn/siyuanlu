(function($){
	$.NewsPane = function(){
		var news, lastIndex,
			node = $('<div class="news_area"></div>');
		this.hasMore = false;
		this.load = function(raw){
			news = raw.data;
			lastIndex = 0;
			this.hasMore = raw.hasMore;
		};
		this.append = function(raw){
			lastIndex = !news ? 0 : news.length;
			this.hasMore = raw.hasMore;
			news = news.concat(raw.data);
		};
		this.refresh = function(){
			if(!news || news.length == 0) return;

			// 规定每次追加都以新的<ul>开始
			var len = news.length;
			for (var i = lastIndex; i < len; i++) {
				var block = $('<ul class="news_block"></ul>');
				var j;
				for(j = 0; j < 9; j++){
					if(i + j == len) break;
					var d = news[i + j];
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
				}
				i += j - 1;
				node.append(block);
			}
		};
		this.getNode = function(){
			return node;
		};
		this.getData = function(){
			return news;
		};
	};
})(jQuery);
