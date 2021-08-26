const { json } = require("express");
const { Mongoose } = require("mongoose");
const Course = require('../models/Cources');

class SiteController{

    // GET /
    index(req, res, next){

        // Course.find({}, function(err, courses){
        //     if (!err) res.json(courses);
        //     else res.status(400).json({ error: 'Loi' });
        // });

        Course.find({})
            .then(courses=>res.render('home', {
                title: 'Home',
                courses: courses,
                //or courses
            }))
            .catch(next);

        // res.render('home');
    }

    //GET /Site/search
    search(req, res){
        res.render('search');
    }


}

module.exports = new SiteController;

