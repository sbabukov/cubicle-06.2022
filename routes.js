const {Router} = require('express');
const router = Router();
// създаваме си инстанция на раутера

router.get('/', (req, res) => {
    // console.log('It`s working');

    res.render('home', {layout: false})
    // това {layout: false} не дава на хендълбарс да си търси папка layouts
});

module.exports = router;