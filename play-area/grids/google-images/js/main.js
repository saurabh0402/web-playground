(function(){

	// Could be loaded dynamically. I am hardcoding it ;)
	// Here image links are just 1.png to 16.png!

	var i,
		cont = document.getElementsByClassName("cont")[0],
		prev, cur, count = 0, breakPoint, prevClicked;

	// Again this should be loaded dynamically from the server
	// and can be different for each image
	var content = "Some content here :)";

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

				var imgArrow = document.createElement('div');
				imgArrow.className = "imgArrow";
				imgCont.appendChild(imgArrow);

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
		if(prevClicked)
			prevClicked.getElementsByClassName('imgArrow')[0].className = "imgArrow";

		prevClicked = this;

		var elem = this.nextSibling, 
			prev = document.getElementsByClassName('clickedImageCont')[0],
			div, elemToAppend;

		if(breakPoint !== 1) {
			while(elem && (elem.className != 'imgCont' || elem.dataset.id % breakPoint !== 1)){
				elem = elem.nextSibling;
			}
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

		if(div != prev){
			var left = document.createElement('div'),
			right = document.createElement('div');
			left.className = 'left'; right.className = 'right';
			var img = new Image();
			img.src = this.getElementsByTagName('img')[0].src;
			left.appendChild(document.createTextNode(content));
			right.appendChild(img);
			div.appendChild(left);
			div.appendChild(right);
		}

		else {
			div.getElementsByTagName('img')[0].src = this.getElementsByTagName('img')[0].src;
		}
		
		if(!elem){
			div.dataset.id = 0;
			cont.appendChild(div);
		}

		else {
			div.dataset.id = elem.dataset.id;
			cont.insertBefore(div, elem);
			this.scrollIntoView();
		}

		this.getElementsByClassName("imgArrow")[0].className = "imgArrow shown";
	}

	window.onload = function(){
		setBreakPoint();
	}

	window.onresize = function(){
		setBreakPoint();
		if(prevClicked)
			setClickedImage.call(prevClicked);
	}

})();