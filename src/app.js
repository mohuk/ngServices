(function(){

	angular.module('servicesApp', ['ngMaterial', 'ngRoute'])
		.config(configuration);

	function configuration($routeProvider, $locationProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'src/views/root.html',
				controller: 'People as vm'
			})
			.when('/complex-science', {

			})
			.when('/test-your-might', {

			});

			// $locationProvider.otherwise('/');
	}

}());