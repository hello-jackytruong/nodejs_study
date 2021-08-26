class SiteController{

    // GET /
    index(req, res){
        res.render('home');
    }

    //GET /Site/search
    search(req, res){
        res.render('search');
    }


}

module.exports = new SiteController;

