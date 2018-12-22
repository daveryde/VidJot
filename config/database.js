if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://david:<Stupid001!>@vidjot-prod-shard-00-00-m9bgo.mongodb.net:27017,vidjot-prod-shard-00-01-m9bgo.mongodb.net:27017,vidjot-prod-shard-00-02-m9bgo.mongodb.net:27017/test?ssl=true&replicaSet=vidjot-prod-shard-0&authSource=admin&retryWrites=true'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost:27017/vidjot-dev' };
}
