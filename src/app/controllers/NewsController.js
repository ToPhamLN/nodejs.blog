const New = require('../models/New');

class NewsController {

    // [GET] /news
    index(req, res, next) {   
        
       New.find({})
            .then(news => res.render('news', {
                news
            }))
            .catch(next);       
            
    }
 
    // [GET] /news/:slug
    show(req, res, next) {
        res.send('New slug!');
    }

}
    

module.exports = new NewsController;