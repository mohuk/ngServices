(function(){

	angular.module('servicesApp', ['ngMaterial', 'ngRoute'])
		.config(configuration);

	function configuration($routeProvider, $locationProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'src/views/root.html',
				controller: 'People as vm'
			});
			// $locationProvider.otherwise('/');
	}

}());