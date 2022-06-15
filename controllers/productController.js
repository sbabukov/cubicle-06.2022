const { Router } = require('express');
const router = Router();


 
router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
});
// това: {title: 'Browse'} указва тайтъл на педжа какъв да е

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('created');
})

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {title: 'Product Details'});
});




module.exports = router;