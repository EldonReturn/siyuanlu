(function($){
	$.Marquee = function(){
		var root = $('<ul class="marquee_box"></ul>'),
			data = [{img:'resources/home/images/sample_large.jpg'}],
			image, len = data.length,
			nodes = new Array(len), nodeIndex = 0,
			scrWidth = $(document).width();

		for(var i = 0; i < len; i++){
			nodes[i] = $('<li class = "slide"></li>');
			image = $('<img src="' + data[i].img + '" />');
			nodes[i].append(image);
			root.append(nodes[i]);
			image.load((function(index){
				return function(){
					nodes[index].css('left', (scrWidth - nodes[index].width()) / 2);
				};
			})(i));
		}

		this.height = 500;
		root.css('height', this.height + 'px');

		this.rotate = function(){
			nodeIndex
			nodes[].animate({opacity:0}, 'fast');
		};
		this.getNode = function(){
			return root;
		};
	}
})(jQuery);
