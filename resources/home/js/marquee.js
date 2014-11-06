(function($){
	$.Marquee = function(){
		var root = $('<ul class="marquee_box"></ul>'),
			data = [{img:'resources/home/images/sample_large.jpg'}, {img:'resources/home/images/sample_large_2.jpg'}],
			image, len = data.length,
			nodes = new Array(len), nodeIndex = 1,
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

		this.rotate = function(fwd /*是否正循环*/){
			nodes[nodeIndex].css('z-index', 9);
			nodes[nodeIndex].animate({opacity:0}, 'slow', function(){
				nodes[!fwd ? (nodeIndex + len - 1) % len : (nodeIndex + 1)%len].css({'z-index': 9, 'opacity': 1});
				nodes[nodeIndex].css({'z-index': 1, 'opacity': 1});
				nodeIndex = !fwd ? (nodeIndex + len - 1) % len : (nodeIndex + 1)%len;
			});
		};
		this.getNode = function(){
			return root;
		};
	}
})(jQuery);
