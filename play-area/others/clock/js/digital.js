(function(){
	let hr, min, sec, cHr = 0, cMin = 0, cSec = 0;
	const clock = document.getElementsByClassName("digital-clock")[0],
		  divS = document.getElementsByClassName("seconds-content"),
		  divM = document.getElementsByClassName("minutes-content"),
		  divH = document.getElementsByClassName("hours-content");

	function getTime(){
		let temp = new Date(Date.now());
		hr = temp.getHours();
		min = temp.getMinutes();
		sec = temp.getSeconds(); //Don't know why! But this fixes bug!
	}

	function setTime(){
		divS[cSec].innerHTML = sec < 10 ? '0'+sec : sec;
		divS[cSec].className = "seconds-content active";
		divS[(cSec+1)%2].className = "seconds-content temp";
		setTimeout(function(){
			divS[(cSec+1)%2].className = "seconds-content";
		}, 300);
		divM[cMin].innerHTML = min < 10 ? '0'+min : min;
		divM[cMin].className = "minutes-content active";
		divM[(cMin+1)%2].className = "minutes-content";
		divH[cHr].innerHTML = hr < 10 ? '0'+hr : hr;
		divH[cHr].className = "hours-content active";
		divH[(cHr+1)%2].className = "hours-content";
	}

	function change(){
		getTime();
		cSec = (cSec+1)%2;
		if(sec == 0)
			cMin = (cMin+1)%2;
		if(min == 0 && sec == 0)
			cHr = (cHr+1)%2;
		setTime();
		timer = setTimeout(change, 1000);
	}

	window.onload = change;

	window.onfocus = function(){
		clearTimeout(timer);
		change();
	}

})();