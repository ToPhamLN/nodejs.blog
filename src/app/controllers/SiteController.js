
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

}
    

module.exports = new SiteController;