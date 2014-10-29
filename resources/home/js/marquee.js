(function($){
	$.Marquee = function(){
		var root = $('<ul class="marquee_box"></ul>'),
			data = [{img:'resources/home/images/sample_large.jpg'}, {img:'resources/home/images/sample_large.jpg'}],
			node, image, len = data.length,
			scrWidth = $(document).width();

		for(var i = 0; i < len; i++){
			node = $('<li class = "slide"></li>');
			image = $('<img src="' + data[i].img + '" />');
			node.append(image);
			root.append(node);
			image.load(function(){
				node.css('left', (scrWidth - node.width()) / 2);
			});
		}

		this.height = 500;
		root.css('height', this.height + 'px');

		this.getNode = function(){
			return root;
		};
	}
})(jQuery);
