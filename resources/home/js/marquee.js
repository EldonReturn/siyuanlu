(function($){
	$.Marquee = function(data, compact/*是否紧凑模式*/, interval/*时间间隔*/, w/*宽度*/, h/*高度*/){
		var navHeight = 120, interval = !interval ? 20000 : interval,
			owner = this,
			root = $('<div class="marquee_box"></div>'),
			wrapper = $('<div></div>'),
			nav_left = $('<div class="prev display_none"><img src="resources/home/images/marquee/prev.png"/></div>'),
			nav_right = $('<div class="next display_none"><img src="resources/home/images/marquee/next.png"/></div>'),
			container = $('<ul class="container"></ul>'),
			thumbContainer = $('<div class="thumb_container"></div>'),
			thumbWrapper = $('<ul class="thumb_wrapper"></ul>'),
			image, len = data.length,
			nodes = new Array(len), nodeIndex = 0,
			thumbNodes = new Array(len),
			fixedWidth = typeof(w) != 'undefined',
			width = fixedWidth ? w : $(document).width(),
			height = typeof(h) != 'undefined' ? h : 500,
			lock,
			THUMB_WIDTH = 210;

		this.data = data;

		root.append(wrapper);
		wrapper.append(nav_left);
		wrapper.append(nav_right);
		wrapper.append(container);
		if(!compact){
			thumbWrapper.css('width', THUMB_WIDTH * len + 'px');
			thumbContainer.append(thumbWrapper);
			root.append(thumbContainer);
		}

		if(fixedWidth){
			root.css('width', width + 'px');
			container.css('height', height + 'px');
		}


		nav_left.css('top', (height - navHeight) / 2 + 'px');
		nav_right.css('top', (height - navHeight) / 2 + 'px');

		for(var i = 0; i < len; i++){
			nodes[i] = $('<li class = "slide"></li>');
			image = $('<img src="' + data[i].img + '" />');
			if(i == 0) nodes[i].css('z-index', 9);
			nodes[i].append(image);
			container.append(nodes[i]);
			image.load((function(index){
				return function(){
					nodes[index].css('left', (width - nodes[index].width()) / 2 + 'px');
				};
			})(i));
			if(!compact){
				thumbNodes[i] = $('<li class="thumb_slide"><img class="thumb_image" src="' + data[i].img + '"/></li>');
				thumbNodes[i].click((function(index){
					return function(){
						owner.jumpTo(index);
					};
				})(i));
				thumbWrapper.append(thumbNodes[i]);
			}
		}

		container.css('height', height + 'px');

		// 监测窗口大小改变
		if(!fixedWidth){
			$(window).resize(function(){
				width = $(document).width();
				for(var i = 0; i < len; i++){
					nodes[i].css('left', (width - nodes[i].width()) / 2 + 'px');
				}
			});
		}

		// 监测鼠标是否在上面
		wrapper.mouseover(function(){
			nav_left.removeClass('display_none');
			nav_right.removeClass('display_none');
		});
		wrapper.mouseout(function(){
			nav_left.removeClass('display_none').addClass('display_none');
			nav_right.removeClass('display_none').addClass('display_none');
		});

		// 监测左右浏览事件
		nav_left.click(function(){
			if(lock) return;
			clearTimeout(handle);
			owner.rotate(true);
			handle = setTimeout(fn, interval);		
		});
		nav_right.click(function(){
			if(lock) return;
			clearTimeout(handle);
			owner.rotate();
			handle = setTimeout(fn, interval);
		});

		// 定时轮播
		var handle,
			fn = function(){
				owner.rotate();
				handle = setTimeout(fn, interval);
			};
		handle = setTimeout(fn, interval);

		// 滚动缩略图
		var scrollTo = function(index, callback){
			if(!compact){
				var left = thumbNodes[index].position().left;

				if(left - THUMB_WIDTH >= 0 && THUMB_WIDTH * (len + 1) - left >= width){
					left -= THUMB_WIDTH;
				}else if(THUMB_WIDTH * (len + 1) - left < width){
					left = THUMB_WIDTH * len - width;
				}
				thumbWrapper.animate({'left': -left + 'px'}, 'fast', callback);
			}else{
				callback();
			}
		};

		this.rotate = function(reverse /*是否逆循环*/){
			var next = reverse ? (nodeIndex + len - 1) % len : (nodeIndex + 1) % len;
			this.jumpTo(next);
		};

		this.jumpTo = function(index){
			if(lock || index == nodeIndex) return;
			lock = true;
			scrollTo(index, function(){
				nodes[nodeIndex].css('z-index', 9);
				nodes[index].css('z-index', 1);
				nodes[nodeIndex].animate({'opacity': 0}, 'slow', function(){
					nodes[nodeIndex].css({'z-index': 0, 'opacity': 1});
					nodeIndex = index;
					nodes[nodeIndex].css({'z-index': 9, 'opacity': 1});
					lock = false;
				});
			});
		};

		this.getNode = function(){
			return root;
		};
	};
})(jQuery);
