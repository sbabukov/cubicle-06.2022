const express = require('express');
const {engine}  = require('express-handlebars');


function setupExpress(app) {
    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    // сетъпваме хендълбарса да работи с файлове .hbs
    app.set('view engine', 'hbs')
    // сетваме, че вю енджина е хбс
    
    app.use(express.static('public'))
    // сетъпваме папка public

    app.use(express.urlencoded({
        extended: true
    }));
    // този мидълуер чете бодито от формата и го парсва
};
// функция която очаква да й се подаде арр и да конфигурира

module.exports = setupExpress;