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
			default:
				console.error("Missing type. (ex: type: 'circle')")
		}

		
	};

	function circle(ele,data){
		// max data.weight is half of data.size.
		$(ele).css({
			'border' : data.weight+' solid '+data.colors[0],
			'border-radius' : '50%',
			'border-top' : data.weight+' solid '+data.colors[1],
			'width' : data.size,
			'height' : data.size,
			'-webkit-animation' : 'spin '+data.speed+'s linear infinite'
		});
	}





}(jQuery));