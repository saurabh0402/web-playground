(function(){

	// Could be loaded dynamically. I am hardcoding it ;)
	// Here image links are just 1.png to 16.png!

	var i,
		cont = document.getElementsByClassName("cont")[0],
		prev, cur, count = 0, breakPoint;

	for(i = 1; i <= 16; i++){
		var img = new Image();

		img.onload = (function(img){
			return function(){
				++count;
				var imgCont = document.createElement('div'),
					realCont = document.createElement('div');

				imgCont.className = 'imgCont';
				realCont.className = "realCont";
				realCont.appendChild(img);
				var divImgData = document.createElement('div');
				divImgData.className = "divImgData";
				divImgData.appendChild(document.createTextNode(img.width + ' X ' + img.height + ' - unsplash.com' ));
				realCont.appendChild(divImgData);
				imgCont.appendChild(realCont);

				imgCont.dataset['id'] = count;
				cont.appendChild(imgCont);

				imgCont.addEventListener("click", setClickedImage);
			}
		})(img);

		img.src = "./images/" + i + ".png"
	}

	function setBreakPoint(){
		var width = window.innerWidth;
		if(width <= 480)
			breakPoint = 1;
		else if(width <= 768)
			breakPoint = 2;
		else if(width <= 1024)
			breakPoint = 3;
		else
			breakPoint = 4;
	}

	function setClickedImage(){
		var elem = this.nextSibling, 
			prev = document.getElementsByClassName('clickedImageCont')[0],
			div, elemToAppend;

		while(elem && (elem.className != 'imgCont' || elem.dataset.id % breakPoint !== 1)){
			elem = elem.nextSibling;
		}

		if(prev){
			if((prev.dataset.id !== 0 && !elem) || (prev.dataset.id !== elem.dataset.id)){
				div = document.createElement('div');
				prev.remove();
			}

			else {
				div = prev;
			}
		}

		else {
			div = document.createElement('div');
		}

		div.className = "clickedImageCont";

		if(!elem){
			div.dataset.id = 0;
			cont.appendChild(div);
			
		}

		else {
			div.dataset.id = elem.dataset.id;
			cont.insertBefore(div, elem);
		}
	}

	window.onload = function(){
		setBreakPoint();
	}

	window.onresize = function(){
		setBreakPoint();
	}

})();