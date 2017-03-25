(function(){
	var li = document.getElementsByClassName("menuItem"), history = [], cur;

	[].forEach.call(li, function(item){
		item.addEventListener("click", function(){
			var submenu = this.dataset.submenu;
			var content = this.dataset.content;

			if(submenu && submenu.trim()){
				this.parentNode.parentNode.className = "hiddenMenu";
				history.push(this.parentNode.parentNode);
				cur = document.getElementById(submenu);
				cur.className = '';
			}

			else if(content && content.trim()){
				document.getElementById(content).className = "content";
				var activeItem = document.getElementsByClassName("active")[0];

				if(activeItem)
					activeItem.className = "menuItem";

				this.className = "menuItem active";
			}

		}, false);
	});

	document.getElementsByClassName("back")[0].addEventListener("click", function(){
		if(history.length){
			var p = history.pop();
			cur.className = "hiddenMenu";
			p.className = "";
			cur = p;
		}
	});

})();