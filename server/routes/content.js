module.exports = function(app) {

  /*==========  get all posts  ==========*/
   app.get('/posts', function(req, res) {
        app.keystone.list('Post').model.find().exec(function(err, results) {
            if (err) throw err;
            res.end(JSON.stringify(results));
        });
    });


};