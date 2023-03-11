const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    // [GET] / home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
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