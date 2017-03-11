(function(){
	var games = document.getElementsByClassName("oneGame"),
		menuButtons = document.getElementsByClassName("menuButton");

	[].forEach.call(menuButtons, function(item){
		item.addEventListener("click", function(e){

			var activeMenu = document.getElementsByClassName("active")[0];
			if(activeMenu !== this){
				activeMenu.className = "menuButton inactive";
				this.className = "menuButton active";

				var category = this.dataset.category;

				if(category === 'all'){
					[].forEach.call(games, function(item){
						item.className = "oneGame visible"
					});
				}

				else {
					[].forEach.call(games, function(item){
						if(item.dataset.category === category)
							item.className = "oneGame visible";
						else
							item.className = "oneGame hidden";
					});
				}
			}

		}, false);
	});
})();