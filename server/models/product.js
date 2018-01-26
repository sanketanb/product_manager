// require mongoose
console.log("from product models 1")
var mongoose = require('mongoose');
// create the schema
var ProductSchema = new mongoose.Schema({
    name: { type: String, unique: [true, "Names should be unique"], required: [true, "Restaurant Name is required"], minlength: [3, "Name must contain atleast three characters"] },
    cuisine: { type: String, required: [true, "Cuisine is required"], minlength: [3, "Cuisine must contain atleast three characters"] },
    reviews: { user: { type: String, minlength: [3, "Name must contain atleast three characters"] }, stars: { type: Number }, content: { type: String, minlength: [3, "Review must contain atleast three characters"] } }
    // created_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now}
}, { timestamps: true })

mongoose.model('Product_schema', ProductSchema);

console.log("from product models 2");