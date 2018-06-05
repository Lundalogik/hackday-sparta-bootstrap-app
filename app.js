lbs.apploader.register('sparta', function () {
    var self = this;

    //config
    this.config = {
        dataSources: [

        ],
        resources: {
            scripts: [],
            styles: ['app.css'],
            libs: ['json2xml.js']
        }
    },

    //initialize
    this.initialize = function (node, viewModel) {

        //Use this		method to setup you app. 
        //
        //The data you requested along with activeInspector are delivered in the variable viewModel.
        //You may make any modifications you please to it or replace is with a entirely new one before returning it.
        //The returned viewmodel will be used to build your app.
	 
		//Get users competitions 
		//TODO: grab the current_user (this is hard coded to James)
		getCompsURL = "https://api.spartasales.com/1/users/2/competitions/ongoing";
		var result = lbs.common.executeVba('SpartaModule.GetSparta,' + getCompsURL + ',GET');
		//lbs.log.info(result);
		var json = JSON.parse(result);
		viewModel.competitionName = json.response[0].name; //TODO: This grabs the first comp in the list - handle multiple Competitions
		
		viewModel.compid = json.response[0].id;
		
		//Get info about the above competition competition 
		getInfoAboutComp = "https//api.spartasales.com/1/competition_members/cm";
		var result2 = lbs.common.executeVba('SpartaModule.GetSparta,' + getInfoAboutComp + ',GET' + json.response[0].id, '2');
		lbs.log.info(result2);
	
		
		
		//Get rank for user + competition 
		
		


        return viewModel;
    }
});
