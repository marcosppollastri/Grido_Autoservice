var mongoose = require('mongoose');

var saborScheema = new mongoose.Schema({
        nombre      : String,
        disponible  : Boolean,
        detalle     : String
});

var Sabor = mongoose.model('Sabor', saborScheema);

module.exports = Sabor;