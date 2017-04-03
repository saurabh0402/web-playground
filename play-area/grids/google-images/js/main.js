(function(){

	// Could be loaded dynamically. I am hardcoding it ;)
	// Here image links are just 1.png to 16.png!

	var i,
		cont = document.getElementsByClassName("cont")[0],
		prev, cur;

	for(i = 1; i <= 16; i++){
		var img = new Image();

		img.onload = (function(img){
			return function(){
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
				cont.appendChild(imgCont);
			}
		})(img);

		img.src = "./images/" + i + ".png"
	}

})();