/**
* Solicitud.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  //tableName = 'solicitud',

  attributes: {
  	titulo:{
  		type: 'string',
  		required: true
  	},

  	cantidad:{
  		type: 'string',
  		required: true
  	},
  	
  	grupoSang:{
  		type: 'string',
  		required: true
  	},

  	descripcion:{
  		type: 'string'
  	},

  	pacienteAsignado:{
  		colletion: 'Paciente',
  		via: 'nss'
  	},

  	creadoPor:{
  		model: 'Administrador',
  		required: true
  	}
  }
};

