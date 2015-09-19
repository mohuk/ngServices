(function(){

	angular.module('servicesApp')
		.controller('People', People);

	function People(peopleService){
		var vm = this;

		vm.average = average;
		vm.findByEmail = findByEmail;
		vm.list = peopleService.get();

		function average(){
			alert(peopleService.average());
		}

		function findByEmail(email){
			var person = peopleService.findByEmail(email);
			alert(person.name.first);
		}

	}

}());