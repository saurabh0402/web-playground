(function(){
	var li = document.getElementsByClassName("menuItem");

	[].forEach.call(li, function(item){
		item.addEventListener("click", function(){
			var submenu = this.dataset.submenu;
			var content = this.dataset.content;

			if(submenu && submenu.trim()){
				this.parentNode.parentNode.className = "hiddenMenu";
				document.getElementById(submenu).className = "";
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

})();