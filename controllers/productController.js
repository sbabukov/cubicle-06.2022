const { Router } = require('express');
const router = Router();
const productService = require('../services/productService');
const {validateProduct} = require('./helpers/productHelps')
// при named export, трябва да се слагат {} скоби



router.get('/', (req, res) => {

    let products = productService.getAll();
    // взима всичките продукти от сървиса и ги подаваме долу (products)
    res.render('home', { title: 'Browse', products });

});
// това: {title: 'Browse'} указва тайтъл на педжа какъв да е
// продукт контролера взима продууктите от сървиса


router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});


router.post('/create', validateProduct, (req, res) => {

    // vaidation imput
    // задължително трябва да се валидират данните от формата
    // validateProduct е мидълуер за валидиране

    productService.create(req.body, (err) => {
        if (err) {
            return res.status(500).end();
        };

        res.redirect('/products');
        // редиректва към хоумпейджа за да видим създадения пейдж
    });
    // криейтва кубчето по модела cube.js, взима данните от рек-бодито
    // този (err) е заради колбека във функцията криейт


    // console.log(req.body);
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    let product = productService.getOne(req.params.productId)
    // на гетУан от продукт сървиза се подава req.params.productId - което айдито, това ни връща дадения продукт

    res.render('details', { title: 'Product Details', product});
    // горния product се подава за рендериране в опшъните
});




module.exports = router;