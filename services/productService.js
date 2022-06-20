const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
const productsData = require('../config/products.json');


function getAll() {
    return productsData;
}


function create(data) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel);
    
    // създаване на нов кюб в пост заявката, като uniqid() се подава като функция, която си се изпълнява, другите параметри си ги взима от рек-бодито

    productsData.push(cube);
    // пушва обекта cube в масива productsData

    fs.writeFile(__dirname + '/../config/products.json',JSON.stringify(productsData), (err) => {
        // JSON.stringify(productsData) обръща го в стринг и го записва във файла
        if (err) {
            console.log('Some error' + err);
            return;
        };

    });
    // тук записва файла с новите кубове

};

module.exports = {
    create
};