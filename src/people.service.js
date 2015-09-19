(function(){
	
	'use strict';

	angular.module('servicesApp') 
		.service('peopleService', peopleService);

	function peopleService(){

		/*
		 * Move the list to the factory as this is treated as a model
		 */
		var list = [
		  {
		    "_id": "55fc85d3db7947d852a3449a",
		    "age": 31,
		    "name": {
		      "first": "Margaret",
		      "last": "Meyers"
		    },
		    "company": "gmail",
		    "email": "margaret.meyers@gmail.biz",
		    "registered": "Thursday, March 13, 2014 9:20 PM"
		  },
		  {
		    "_id": "55fc85d3bde386c2fed99f27",
		    "age": 25,
		    "name": {
		      "first": "Joanna",
		      "last": "Mcmillan"
		    },
		    "company": "gmail",
		    "email": "joanna.mcmillan@gmail.us",
		    "registered": "Friday, April 25, 2014 12:38 AM"
		  },
		  {
		    "_id": "55fc85d302a394ff09207bc7",
		    "age": 31,
		    "name": {
		      "first": "Black",
		      "last": "Joseph"
		    },
		    "company": "gmail",
		    "email": "black.joseph@gmail.name",
		    "registered": "Saturday, August 2, 2014 1:44 PM"
		  },
		  {
		    "_id": "55fc85d3f4e32a8187c0fe45",
		    "age": 32,
		    "name": {
		      "first": "Kim",
		      "last": "Cole"
		    },
		    "company": "gmail",
		    "email": "kim.cole@gmail.ca",
		    "registered": "Friday, June 13, 2014 1:35 AM"
		  },
		  {
		    "_id": "55fc85d39696646ed768f25b",
		    "age": 27,
		    "name": {
		      "first": "Bowen",
		      "last": "Merrill"
		    },
		    "company": "gmail",
		    "email": "bowen.merrill@gmail.co.uk",
		    "registered": "Thursday, January 23, 2014 8:52 AM"
		  }
		];

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