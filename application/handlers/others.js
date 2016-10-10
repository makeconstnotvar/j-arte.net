var translations = require('../translations/others');

module.exports = function (req, res, next) {
    var photos = Object.keys(translations).map(key=> {
        return {
            thumb: translations[key] + '.jpg',
            file: translations[key] + '.jpg',
            name: translations[key][req.lang]
        }
    });
    res.render('gallery', Object.assign(req.content,{photos: photos}));
};
