const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
const productsData = require('../config/products.json');


function getAll() {
    return productsData;
}

function getOne(id) {
    return productsData.find(x => x.id == id);
    // x => x.id == id сърч предикат да намира id
    // намира конкретния куб и го връща

};


function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel);

    // създаване на нов кюб в пост заявката, като uniqid() се подава като функция, която си се изпълнява, другите параметри си ги взима от рек-бодито

    productsData.push(cube);
    // пушва обекта cube в общия масив productsData

       

    fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), (err) => {
        // JSON.stringify(productsData) обръща го в стринг и го записва във файла
        if (err) {
            console.log('Some error' + err);
            return;
        };

    });
    // тук записва файла с новите кубове

};

module.exports = {
    create,
    getAll,
    getOne
};