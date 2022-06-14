const config = {
    development:{
        PORT: 5000,
    },
    production:{
        PORT: 80,
    }
};
// сетъпваме го за две среди

module.exports = config[process.env.NODE_ENV.trim()]

// правим го автоматично да се избира порта като сетваме инвайрмен променлива(променя се според средата на която се изпълнява кода)
// накрая се слага .trim() за да махне интервалите
