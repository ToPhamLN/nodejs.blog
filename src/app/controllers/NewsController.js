const New = require('../models/New');

class NewsController {

    // [GET] /news
    index(req, res) {
        res.render( 'news');        
    }
    //
//     MyModel.find({ someField: 'someValue' })
//   .then(docs) => {
//     // do something with docs
//   })
//   .catch(err) => {
//     // handle error
//   }
    //

    // [GET] /news/:slug
    show(req, res) {

        
        New.find({}, function (err, news) {
            if(!err) {
                res.send(news);
            } else {
            res.status(400).json({ error: 'Error!!' });
            }  
        });

        //res.send('New slug!');
    }

}
    

module.exports = new NewsController;