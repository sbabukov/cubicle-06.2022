const Cube = require('../models/Cube');
const uniqid = require('uniqid');
// const fs = require('fs');
const path = require('path');
const productsData = require('../config/products.json');
const fs = require('fs/promises');
const { search } = require('../controllers/productController');
// за да работим с промис вариянт за записването на файла


function getAll(query) {
    
    let result = productsData;
    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search))
        // ако е позитивна стойност, има го, 
    }

    if (query.from){
        result = result.filter(x => Number(x.level) >= query.from)
        // куери стринга в браузера
    }

    if (query.to){
        result = result.filter(x => Number(x.level) <= query.to)
        // куери стринга в браузера
    }
    // всичките ифове за сърч функцията
    
    return result;
}

function getOne(id) {
    return productsData.find(x => x.id == id);
    // x => x.id == id сърч предикат да намира id
    // намира конкретния куб и го връща

};


function create(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel);

    // създаване на нов кюб в пост заявката, като uniqid() се подава като функция, която си се изпълнява, другите параметри си ги взима от рек-бодито
    // слагаме един колбек, защото криейт е асинхронна функция

    productsData.push(cube);
    // пушва обекта cube в общия масив productsData

        // вариант с колбек
    // fs.writeFile(path.join(__dirname, '/../config/products.json'),
    //     JSON.stringify(productsData),
    //     callback
    //     // JSON.stringify(productsData) обръща го в стринг и го записва във файла

    // );
    // тук записва файла с новите кубове

    return fs.writeFile(
        path.join(__dirname, '/../config/products.json'),
        JSON.stringify(productsData),
    )
    // слагаме ретърн, защото fs.writeFile връща промис
};

module.exports = {
    create,
    getAll,
    getOne
};