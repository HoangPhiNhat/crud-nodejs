module.exports = {
  multipleMongooseToObject: (mongooses) =>
    mongooses.map((mongoose) => mongoose.toObject()),
  mongooseToOject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
