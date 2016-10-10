var menu = require('../translations/menu');
var footer = require('../translations/footer');

module.exports = function (req, res, next) {
    req.lang = req.params.lang || "ru";
    req.content = {
        menu: menu[req.lang],
        footer: footer[req.lang]
    };
    next();
};