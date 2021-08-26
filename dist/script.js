(function() {
	var input 	= "",
		correct = "2198";
	
	var dots    = document.querySelectorAll(".dot"), 
		numbers = document.querySelectorAll(".number");
		dots    = Array.prototype.slice.call(dots);
		numbers = Array.prototype.slice.call(numbers);
		
	numbers.forEach(function(number, index) {
		number.addEventListener('click', function() {
			number.className += ' grow';
			input += (index+1);
			dots[input.length-1].className += ' active';
			if(input.length >= 4) {
				if(input !== correct) {
					dots.forEach(function(dot, index) {
						dot.className += " wrong";
					});
					document.body.className += " wrong";
				}
				else {
					dots.forEach(function(dot, index) {
						dot.className += " correct";
					});
					document.body.className += " correct";
					window.location.href="https://app.livelokaatio.fi/?page_id=22";

				}
				setTimeout(function() {
					dots.forEach(function(dot, index) {
						dot.className = "dot";
					});
					input = "";
				}, 900);
				setTimeout(function() {
					document.body.className = "";
				}, 2000);
			}
			setTimeout(function() {
				number.className = 'number';
			}, 1000);
		});
	});
})();