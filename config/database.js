if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://<username>:<password>@ds249299.mlab.com:49299/vidjot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost:27017/vidjot-dev'}
}
