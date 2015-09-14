/**
* Contacto.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName = 'contacto',
  
  schema: true,

  attributes: {

  	nombre:{
  		type: 'string',
  		required: true
  	},

  	direccion:{
  		type: 'string',
  		required: true
  	},

  	telefono:{
  		type: 'string',
  		defaultsTo: '1111111111'
  	},

  	pacienteAsignado:{
  		model: 'Paciente',
  		via: 'nss'
  	}

  }
};

