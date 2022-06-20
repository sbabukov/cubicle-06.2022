const { Router } = require('express');
const router = Router();
const productService = require('../services/productService');


 
router.get('/', (req, res) => {

    let products = productService.getAll();
    // взима всичките продукти от сървиса и ги подаваме долу (products)
    res.render('home', {title: 'Browse', products});
    
});
// това: {title: 'Browse'} указва тайтъл на педжа какъв да е
// продукт контролера взима продууктите от сървиса

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {

    // vaidation imput
    // задължително трябва да се валидират данните от формата
    
    productService.create(req.body);
    // криейтва кубчето по модела cube.js, взима данните от рек-бодито



    // console.log(req.body);
    res.redirect('/products');
    // редиректва към хоумпейджа за да видим създадения пейдж
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});




module.exports = router;