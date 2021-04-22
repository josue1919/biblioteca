var express = require('express');
var router = express.Router();
const librosController=require('../controllers/librosContrller');
/* GET home page. */
router.get('/',(req,res,next)=>{
    res.send('Bienvenido a la biblioteca')
});

module.exports = router;
