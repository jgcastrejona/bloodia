/**
* Paciente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName = 'paciente',
  
  schema: true,	

  attributes: {
  	
  	nss: {
  		type: 'string',
  		required: true,
  		primaryKey: true
  	},

  	nombre:{
  		type: 'string',
  		required: true
  	},

  	grupoSang: {
  		type: 'string',
  		required: true
  	},

  	contactoFF:{
  		collection:'Contacto',
  		via: 'pacienteAsignado',
  		defaultsTo: 'NULL'
  	}

  }
};

