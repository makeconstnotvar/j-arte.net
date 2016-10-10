var express = require('express'),
    handlers = require('../handlers'),
    router = express.Router();

router.get('/', handlers.about);
router.get(':lang/', handlers.about);
router.get('/contacts', handlers.contacts);
router.get(':lang/contacts', handlers.contacts);
router.get('/portraits', handlers.portraits);
router.get('/portraits/:page', handlers.portraits);
router.get(':lang/portraits', handlers.portraits);
router.get(':lang/portraits/:page', handlers.portraits);
router.get('/others', handlers.others);
router.get(':lang/others', handlers.others);

module.exports = router;
