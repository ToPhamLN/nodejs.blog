

class NewsController {

    // [GET] /news
    index(req, res, next) {   
        res.send('News');
            
    }
 
    // [GET] /news/:slug
    show(req, res, next) {
        res.send('New slug!');
    }

}
    

module.exports = new NewsController;