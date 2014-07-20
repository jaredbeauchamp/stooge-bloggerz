'use strict';

/**
 * @ngdoc service
 * @name stoogeBloggerzApp.author
 * @description
 * # author
 * Service in the stoogeBloggerzApp.
 */
angular.module('stoogeBloggerzApp')
  .service('author', function author() {
    
      	return {
	  		getAuthors: function(){
	  			return [
				{ title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
				{ title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
				{ title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
				{ title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
			];
	  		}
  	}



  });
