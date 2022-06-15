const {Router} = require('express');
const router = Router();
// създаваме си инстанция на раутера

const productController = require('./controllers/productController');
// импортваме контролерите

const aboutController = require('./controllers/aboutController');

router.use('/', productController);
// за всички заявки, които са на / нека productController се погрижи
// тук се използват раутерите от productController
router.use('/about', aboutController);


// router.get('/', productController.index);
// router.get('/create', productController.create);
// // регистрираме контролерите, index и create са методите от productController

module.exports = router;





// router.get('/', (req, res) => {
//     // console.log('It`s working');

//     res.render('home', {layout: false})
//     // това {layout: false} не дава на хендълбарс да си търси папка layouts
// });