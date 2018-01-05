let _modPath;

exports.initialize = (modPath) =>{                     
    _modPath = modPath;
};

exports.onLoadGame  = settings => {
	settings.office.workstations.forEach(ws => {
		if (ws.employee != null) {
			ws.employee.speed = 1000
		}
	});
};

exports.onNewDay = settings => {
	settings.office.workstations.forEach(ws => {
		if (ws.employee != null) {
			ws.employee.speed = 1000
		}
	});
};