const {Router} = require('express');
const router = Router();
// създаваме си инстанция на раутера

const productController = require('./controllers/productController');
// импортваме контролерите

const homeController = require('./controllers/homeController');

router.use('/products', productController);
// за всички заявки, които са на / нека productController се погрижи
// тук се използват раутерите от productController
router.use('/', homeController);

router.get('*', (req, res) => {
    res.render('404');
});
// за всеки друг раут да зарежда 404 хендълбарс


// router.get('/', productController.index);
// router.get('/create', productController.create);
// // регистрираме контролерите, index и create са методите от productController

module.exports = router;





// router.get('/', (req, res) => {
//     // console.log('It`s working');

//     res.render('home', {layout: false})
//     // това {layout: false} не дава на хендълбарс да си търси папка layouts
// });