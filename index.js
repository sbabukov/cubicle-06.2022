const express = require('express');
const config = require('./config/config');
const {engine}  = require('express-handlebars');

const app = express();

app.engine('hbs', engine({
    extname: 'hbs'
}));
// сетъпваме хендълбарса да работи с файлове .hbs
app.set('view engine', 'hbs')
// сетваме, че вю енджина е хбс

app.use(express.static('public'))
// сетъпваме папка public


app.get('/', (req, res) => {
    // console.log('It`s working');

    res.render('home', {layout: false})
    // това {layout: false} не дава на хендълбарс да си търси папка layouts
});


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));
// стартира се на съответния порт