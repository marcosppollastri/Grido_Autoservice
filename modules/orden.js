var mongoose = require('mongoose');

var ordenScheema = new mongoose.Schema({
    monto       : Number,
    fecha       : Date,
    productos   : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto"
    }]
});

var Orden = mongoose.model('Orden', ordenScheema);

module.exports = Orden;