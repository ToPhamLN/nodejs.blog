const New = require('../models/New');

class NewsController {

    // [GET] /news
    index(req, res) {
        res.render( 'news');        
    }
 
    // [GET] /news/:slug
    show(req, res, next) {       
        // New.find({})
        //     .then(news => res.send(news))
        //     .catch(error => next(error));
        New.find({})
            .then(news => res.render('news', {
                news
            }))
            .catch(next);

        //res.send('New slug!');
    }

}
    

module.exports = new NewsController;