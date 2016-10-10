var translations = require('../translations/about');

module.exports = function (req, res, next) {
    res.render('about', Object.assign(req.content, {abouts: translations.abouts[req.lang]}));
};
