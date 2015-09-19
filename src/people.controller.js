(function(){

	angular.module('servicesApp')
		.controller('People', People);

	function People(peopleFactory){
		var vm = this;

		vm.average = average;
		vm.findByEmail = findByEmail;
		vm.list = peopleFactory.get();

		function average(){
			alert(peopleFactory.average());
		}

		function findByEmail(email){
			var person = peopleFactory.findByEmail(email);
			alert(person.name.first);
		}

	}

}());