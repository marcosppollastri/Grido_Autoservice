var mongoose = require('mongoose');
var productoScheema = new mongoose.Schema({
    nombre          : String,
    precio          : Number,
    imagen          : String,
    disponibilidad  : Boolean,
    sabores         : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sabor"
    }]
});

var Producto = mongoose.model('Producto', productoScheema);

module.exports = Producto;