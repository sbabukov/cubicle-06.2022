const { Router } = require('express');
const router = Router();
const productService = require('../services/productService');


 
router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
});
// това: {title: 'Browse'} указва тайтъл на педжа какъв да е

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {

    // vaidation imput
    // задължително трябва да се валидират данните от формата
    
    productService.create(req.body);



    // console.log(req.body);
    res.redirect('/products');
    // редиректва към хоумпейджа за да видим създадения пейдж
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});




module.exports = router;