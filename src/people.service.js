(function(){
	
	'use strict';

	angular.module('servicesApp') 
		.service('peopleService', peopleService);

	function peopleService(peopleList){

		/*
		 * Move the list to the factory as this is treated as a model
		 */
		var list = peopleList;

		this.get = get;
		this.average = average;
		this.findByEmail = findByEmail;

		/*
		 * Return the list of people
		 */

		function get(){
			return list;
		}

		/*
		 * Average out the ages from the list
		 */

		function average(){
			var sum = 0;
			list.forEach(function(item){
				sum += item.age;
			});

			return sum / list.length;
		}

		/*
		 * Find person by email
		 */
		
		function findByEmail(email){
			var record;
			list.forEach(function(item){
				if(email === item.email){
					record = item;
					return false;
				}
			});
			return record;
		}

	}

}());