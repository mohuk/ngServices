(function(){

	angular.module('servicesApp', ['ngMaterial', 'ngRoute'])
		.config(configuration);

	function configuration($routeProvider, redirect){

		$routeProvider
			.when('/', {
				templateUrl: 'src/views/root.html',
				controller: 'People as vm'
			})
			.otherwise({redirectTo: redirect});
	}

}());