if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://david:<PASSWORD>@vidjot-prod-m9bgo.mongodb.net/test?retryWrites=true'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost:27017/vidjot-dev' };
}
