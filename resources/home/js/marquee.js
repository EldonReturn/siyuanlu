(function($){
	$.Marquee = function(){
		var navHeight = 120,
			root = $('<div class="marquee_box"></div>'),
			nav_left = $('<div class="prev display_none"><img src="resources/home/images/marquee/prev.png"/></div>'),
			nav_right = $('<div class="next display_none"><img src="resources/home/images/marquee/next.png"/></div>'),
			container = $('<ul class="container"></ul>'),
			data = [{img:'resources/home/images/sample_large.jpg'}, {img:'resources/home/images/sample_large_2.jpg'}],
			image, len = data.length,
			nodes = new Array(len), nodeIndex = 1,
			scrWidth = $(document).width();

		this.height = 500;

		root.append(nav_left);
		root.append(nav_right);
		root.append(container);

		nav_left.css('top', (this.height - navHeight) / 2);
		nav_right.css('top', (this.height - navHeight) / 2);

		for(var i = 0; i < len; i++){
			nodes[i] = $('<li class = "slide"></li>');
			image = $('<img src="' + data[i].img + '" />');
			nodes[i].append(image);
			container.append(nodes[i]);
			image.load((function(index){
				return function(){
					nodes[index].css('left', (scrWidth - nodes[index].width()) / 2);
				};
			})(i));
		}

		container.css('height', this.height + 'px');

		// 监测窗口大小改变
		$(window).resize(function(){
			scrWidth = $(document).width();
			for(var i = 0; i < len; i++){
				nodes[i].css('left', (scrWidth - nodes[i].width()) / 2);
			}
		});

		// 监测鼠标是否在上面
		root.mouseover(function(){
			nav_left.removeClass('display_none');
			nav_right.removeClass('display_none');
		});
		root.mouseout(function(){
			nav_left.removeClass('display_none').addClass('display_none');
			nav_right.removeClass('display_none').addClass('display_none');
		});

		// 监测左右浏览事件
		nav_left.click((function(owner){
			return function(){
				owner.rotate();
			};
		})(this));
		nav_right.click((function(owner){
			return function(){
				owner.rotate(true);
			};
		})(this));

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
