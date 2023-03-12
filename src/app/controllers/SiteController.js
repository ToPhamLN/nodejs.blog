
class SiteController {

    // [GET] / home
    index(req, res, next) {
        res.render('home');
    }
    // [GET] /search 
    search(req, res) {
        res.render('search');
    }

    otoss(req, res) {
        res.render('otos');
    }

}
    

module.exports = new SiteController;