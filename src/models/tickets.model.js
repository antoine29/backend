// tickets-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tickets = new Schema({
    propietario: { type: String, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    createdDAte : {type : Date, 'default' : Date.now }
  }, {
    timestamps: true
  });

  return mongooseClient.model('tickets', tickets);
};
