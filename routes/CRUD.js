var express = require('express');
var router = express.Router();

var CRUD = require("../controllers/CRUD.js");


router.post('/create',CRUD.create);
router.post('/read',CRUD.read);
router.post('/update',CRUD.update);
router.post('/delete',CRUD.delete);


module.exports = router;