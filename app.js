var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");
var Sabor       = require("./modules/sabor");
var Producto    = require("./modules/producto");
var Orden       = require("./modules/orden");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


mongoose.connect("mongodb://localhost:27017/grido_autoservice", {useNewUrlParser: true});



app.get("/", function(req, res){
    res.render("index");
});

app.get("/productos", function(req, res){
    Producto.find({}, function(err, allProductos){
        if(err){
            console.log(err);
        } else {
            Orden.create({
                monto: 0, 
                fecha: new Date()
            }, function(err, newOrden){
                console.log(newOrden);
                if(err){
                    console.log(err);
                } else {
                    res.render("productos", {productos : allProductos}, {orden: newOrden});
                }
            });
            
        }
    });
});

app.get("/productos/new", function(req, res){
    res.render("new");
});

app.post("/productos", function(req, res){
    var formData = req.body.producto;
    Producto.create(formData, function(err, newProducto){
        console.log(newProducto);
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});


//orden
app.get("/orden/:id", function(req, res){
    Orden.findById(req.params.id)
});

app.post("/orden", function(req, res){
    var ordenData = req.body.orden;
    Orden.create(ordenData, function(err, newOrden){
        console.log(newOrden);
        if(err){
            console.log(err);
        } else {
            res.redirect("/orden/print");
        }
    })
});
//Sabores.js object

app.listen(8001, '127.0.0.1', function(){
    console.log("GridoAutoService server just started!")
});

//Orden.js object

// var Orden = {
//     id          : String,
//     monto       : Number,
//     fecha       : Date,
//     productos   : [Producto]
// };
