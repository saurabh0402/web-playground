(function(){
	let hr, min, sec, hrSmall, timer;
	const clock = document.getElementsByClassName("digital-clock")[0],
		  divS = document.getElementsByClassName("seconds-content")[0],
		  divM = document.getElementsByClassName("minutes-content")[0],
		  divH = document.getElementsByClassName("hours-content")[0];

	function getTime(){
		let temp = new Date(Date.now());
		hr = temp.getHours();
		min = temp.getMinutes();
		sec = temp.getSeconds(); //Don't know why! But this fixes bug!
	}

	function setTime(){
		divS.innerHTML = sec < 10 ? '0'+sec : sec;
		divM.innerHTML = min < 10 ? '0'+min : min;
		divH.innerHTML = hr < 10 ? '0'+hr : hr;
	}

	function change(){
		getTime();
		setTime();
		timer = setTimeout(change, 1000);
	}

	window.onload = function(){
		getTime();
		setTime();
		timer = setTimeout(change, 1000);
	}

	window.onfocus = function(){
		clearTimeout(timer);
		getTime();
		setTime();
		timer = setTimeout(change, 1000);
	}

})();