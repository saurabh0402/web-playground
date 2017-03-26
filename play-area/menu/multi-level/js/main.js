(function(){
	var li = document.getElementsByClassName("menuItem"), history = [], cur;

	[].forEach.call(li, function(item){
		item.addEventListener("click", function(){
			var submenu = this.dataset.submenu;
			var content = this.dataset.content;

			if(submenu && submenu.trim()){
				history.push(this.parentNode.parentNode);
				cur = document.getElementById(submenu);
				animateMenuItems(this.parentNode.parentNode, cur);
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

	function animateMenuItems(source, dest){
		var sItems = source.getElementsByClassName("menuItem"),
			dItems = dest.getElementsByClassName("menuItem"), i = 0;

		[].forEach.call(dItems, function(item){
			item.className = item.className + " goToRight";
		});

		setTimeout(function temp(){
			sItems[i].className = sItems[i].className + " goBack";
			++i;
			if(i == sItems.length){
				source.className = "hiddenMenu";
				i = 0;
				dest.className = "";
				setTimeout(function(){
					[].forEach.call(sItems, function(item){
						if(item.className.indexOf("active") == -1)
							item.className = "menuItem";
						else
							item.className = "menuItem active";
					});
					destinationMenus()
				}, 200);
			}
			else
				setTimeout(temp, 100);
		}, 100);

		function destinationMenus(){
			dItems[i].className = dItems[i].className + " animatedCenter";
			++i;
			if(i != dItems.length){
				setTimeout(destinationMenus, 100);
			}
			else {
				setTimeout(function(){
					[].forEach.call(dItems, function(item){
						if(item.className.indexOf("active") == -1)
							item.className = "menuItem";
						else
							item.className = "menuItem active";
					});
				}, 200);
			}
		}
	}

	document.getElementsByClassName("back")[0].addEventListener("click", function(){
		if(history.length){
			var p = history.pop();
			animateMenuItems(cur, p);
			cur = p;
		}
	});

})();