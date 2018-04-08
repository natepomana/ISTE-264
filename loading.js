(function ($) {
	/**
	* Welcome to Loading.js!
	*/

	// Create default loader.
	$.fn.loading = function(data){	
		switch (data.type){
			case "circle":
				circle(this,data);
				break;
			case "line":
				line(this,data);
				break;
			default:
				console.error("Missing type. (ex: type: 'circle')");
		}

		
	};

	function circle(ele,data){
		// max data.weight is half of data.size.
		// check types to make sure they are already set, if not send errors to console.
		var errors = false;
		//size
		if (typeof data.size === "undefined" || typeof data.size != "string" || data.size == "") {
			console.error("Missing size. (ex: size: '150px')");
			errors = true;
		}
		//colors
		if (typeof data.colors === "undefined" || data.colors.constructor !== Array) {
			console.error("Missing colors. (ex: colors: ['#456','#bbb']");
			errors = true;
		}
		//speed
		if (typeof data.speed === "undefined" || data.speed !== parseInt(data.speed, 10)) {
			console.error("Missing Speed. (ex: speed: 1)");
			errors = true;
		}
		//weight
		if (typeof data.weight === "undefined" ||  typeof data.weight != "string" || data.weight == "") {
			console.error("Missing wieght. (ex: weight: '2px')");
			errors = true;
		}
		if (errors) {
			return;
		}
		$(ele).css({
			'border' : data.weight+' solid '+data.colors[0],
			'border-radius' : '50%',
			'border-top' : data.weight+' solid '+data.colors[1],
			'width' : data.size,
			'height' : data.size,
			'-webkit-animation' : 'spin '+data.speed+'s linear infinite'
		});
	}

	function line(ele,data){
		switch (data.style){
			case "line":
				var div = $('<div />').addClass('line').css({
					'width': data.length,
					'height': data.height
				});
				//length of
				var dec = data.time/data.count;
				while (data.count > 0){
					var temp = $('<div />').css({
						'-webkit-animation-delay': "-" + (data.time-dec)*2 + "s",
						'animation-delay': "-" +  (data.time-dec)*2 + "s",
						'width': data.width,
						'margin-right': data.width.substring(0,data.width.length-2)/2 + "px",
					});
					$(div).append(temp);
					data.count--;
					data.time -= dec;
				}
				$(ele).append(div);
				break;
			case "dot":
				break;
		}
	}





}(jQuery));