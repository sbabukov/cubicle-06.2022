const { Router } = require('express');
const router = Router();


 
router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
});
// това: {title: 'Browse'} указва тайтъл на педжа какъв да е

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});

});




module.exports = router;