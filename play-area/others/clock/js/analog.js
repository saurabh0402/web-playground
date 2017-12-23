(function(){
	let hr, min, sec, hrSmall;
	const clock = document.getElementsByClassName("analog-clock")[0],
		  divS = document.getElementsByClassName("analog-seconds")[0],
		  divM = document.getElementsByClassName("analog-minutes")[0],
		  divH = document.getElementsByClassName("analog-hours")[0];

	function init(){
		setHourLines();
		let temp = new Date(Date.now());
		hr = temp.getHours();
		min = temp.getMinutes();
		sec = temp.getSeconds();
		hrSmall = min*0.5;
	}

	function update(){
		++sec;

		if(sec == 60){
			sec = 0;
			min += 1;
			hrSmall += 0.5;
			if(min == 60){
				min = 0;
				hr += 1;
				hrSmall = 0;
			}
		}
	}

	function setHourLines(){
		for(var i=0; i<360; i+=30){
			let div = document.createElement('div');
			div.className = "time-line";
			let divLine = document.createElement('div');
			divLine.className = "line";
			div.appendChild(divLine);
			clock.appendChild(div);
			div.style.transform = "rotate(" + i + "deg)";
		}
	}

	function setAngle(){
		divS.style.transform = "rotate(" + sec*6 + "deg)";
		divM.style.transform = "rotate(" + min*6 + "deg)";
		divH.style.transform = "rotate(" + ((hr%12)*30 + hrSmall) + "deg)";
	}

	function change(){
		update();
		setAngle();
		setTimeout(change, 1000);
	}

	init();
	change();
})();