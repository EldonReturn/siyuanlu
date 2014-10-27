(function($){
	$.Marquee = function(){
		var root = $('<div class="marquee"></div>'),
			marqueeBox = $('<ul class="marquee_box"></ul>'),
			masker = $('<div class="mask"><span></span><span></span></div>'),
			data = [{img:'resources/home/images/sample_large.jpg'}, {img:'resources/home/images/sample_large.jpg'}],
			node, image, len = data.length,
			scrWidth = $(document).width();

		root.append(masker);
		root.append(marqueeBox);
		for(var i = 0; i < len; i++){
			node = $('<li class = "slide"></li>');
			image = $('<img src="' + data[i].img + '" />');
			node.append(image);
			marqueeBox.append(node);
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
