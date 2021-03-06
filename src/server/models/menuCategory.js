var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var menuCategoryModel = new Schema({
    name: {type: String},
    description: {type: String},
    options: {type: [String]},
    prices: {type: [Number]}
}, { collection: 'menucategories' });

module.exports = mongoose.model('MenuCategory', menuCategoryModel);