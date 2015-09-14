/**
* Administrador.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName = 'admin',
  
  schema: true,

  attributes: {
  	
  	nombre: {
  		type: 'string',
  		required: true
  	},

  	usuario:{
  		type: 'string',
  		required: true
  	},

  	password:{
  		type: 'string',
  		required: true
  	},

  	tipo: {
  		type: 'string',
  		defaultsTo: 'Admin'
  	}

  }
};

