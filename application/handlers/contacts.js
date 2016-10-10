var translations = require('../translations/contacts');

module.exports = function (req, res, next) {
    res.render('contacts', Object.assign(req.content,{contacts: translations.contacts[req.lang]}));
};
