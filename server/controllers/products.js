// var moment = require('moment');

var mongoose = require('mongoose');

var Product = mongoose.model('Product_schema');

module.exports = {
    show: function (req, res) {
        Product.find({}, function (err, products) {
            if (err) {
                console.log("in show serverr", err)
                res.json({ message: "error", data: err.message });
            }
            else {
                console.log('show success')
                res.json({ message: "success", data: products });
            }
        })
    },
    create: function (req, res) {
        var new_product = new Product({
            name: req.body.name,
            cuisine: req.body.cuisine
        });
        new_product.save(function (err) {
            if (err) {
                // if (err.name == 'MongoError') {
                //     res.json({ message:"erroru", data:"Name should be a unique"});
                // }
                console.log("@@@@@@@@@@@@@", err);
                console.log('something went wrong');
                res.json({ message: "error", data: err.errors });
            } else {
                console.log('successfully added a Product!');
                res.json({ message: "success" })
            }
        })
    },
    destroy: function (req, res) {
        Product.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                console.log(err)
                console.log("something went wrong")
                res.json({ message: "error", data: err.errors });
            } else {
                console.log("task destroyed ")
                console.log("this is the destroy id", req.params.id)
                res.json({ message: "success" })
            }
        })
    },
    get: function (req, res) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ get')
        Product.findOne({ "_id": req.params.id }, function (err, product) {
            console.log("Edit id is", req.params.id)
            console.log(product)
            res.json({ message: "success", data: product });
        })
    },
    update: function (req, res) {
        Product.update({ "_id": req.params.id }, { $set: { name: req.body.name, cuisine: req.body.cuisine} }, function (err, task) {
            if (err) {
                console.log("something went wrong")
                res.json({ message: "error", data: err.errors });
            } else {
                console.log("product edited ")
                console.log("this is the edited id", req.params.id)
                res.json({ message: "success" })
            }
        })
    }

}