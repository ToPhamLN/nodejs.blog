
class SiteController {

    // [GET] /
    index(req, res) {
    
        // res.json({
        //    message: 'Success',
        // });

         res.render('home');
    }

    // [GET] /search 
    search(req, res) {
        res.render('search');
    }

    otos(req, res) {
        res.render('otos');
    }

}
    

module.exports = new SiteController;