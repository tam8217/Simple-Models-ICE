// Setting up mongoose settings
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Setting the basic model
let DogModel = {};

// Creating the schema
const DogSchema = new mongoose.Schema({
  name: {
    type: String, required: true, trim: true, unique: true,
  },
  breed: { type: String, required: true, trim: true },
  age: { type: Number, min: 0, required: true },
  createdDate: { type: Date, default: Date.now },
});

// Creating ability to find a dog with a specific name
DogSchema.statics.findByName = (name, callback) => {
  const searchParams = { name };

  return DogModel.findOne(searchParams, callback);
};

// Setting the dog model
DogModel = mongoose.model('Dog', DogSchema);

module.exports = {
  DogModel,
  DogSchema,
};
