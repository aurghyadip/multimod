let _modPath;

//Let's not type GetRootScope everytime we want to access root scope
rs = GetRootScope();

// Check if the mod is loaded
Helpers.ConsoleInfo('[MOD] Project Mod loaded');

exports.initialize = (modPath) => {
	_modPath = modPath;

	Modding.setMenuItem({
		name: 'projectmod',
		tooltim: 'Project Mod',
		tooltipPosition: 'top',
		faIcon: 'fa-bolt',
		badgeCount: 0
	});

	exports.views = [{
		name: 'projectmod',
		viewPath: _modPath + 'view.html',
		controller: function ($rootScope) {
			
			this.products_list = rs.settings.products;
			this.progress_list = rs.settings.progress; 

			// Max Features Start
			this.MaxProjectFeatures = () => {
				$rootScope.confirm('Are you sure?', 'Are you sure you want to max all the feauters?', () => {
					for (x in rs.settings.featureInstances) {
    					rs.settings.featureInstances[x].quality.current = rs.settings.featureInstances[x].quality.max;
    					rs.settings.featureInstances[x].efficiency.current = rs.settings.featureInstances[x].efficiency.max;
					}
				});
			}
			// Max Features End

			this.AddUsers = (product_id, amount) => {
				for (var key in rs.settings.progress.products) {
					if(key == product_id) {
						rs.settings.progress.products[key].users.total += amount;
					}
				}
			}
		}
	}]
}