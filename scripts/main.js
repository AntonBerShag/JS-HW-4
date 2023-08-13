let car = {
    manufacturer: "BMW",
    model: "X5",
    releaseYear: 2018,
    averageSpeed: 60,

    carInfo: function() {
        let info = `
        Задача 1\nИнформация об автомобиле:\n
        Производитель: ${car.manufacturer}\n
        Модель: ${car.model}\n
        Год выпуска: ${car.releaseYear} г.\n
        Средняя скорость: ${car.averageSpeed} км/ч
        `;
        return info;
    },

    timeCount: function (distance) {
        let resultTime = distance/this.averageSpeed;
        resultTime += resultTime / 4;
        return `Задача 2\nДля преодоления ${distance} км,\nнеобходимо затратить ${resultTime.toFixed(0)} часов`;
    },

    quantityOfYears: function() {
        let currentDate = new Date();
        let resultDate = currentDate.getFullYear() - this.releaseYear;
        return `Задача 3\n${resultDate} лет прошло с момента выпуска автомобиля`;
    }
    
};

// Задание 1
alert(car.carInfo());

// Задание 2
alert(car.timeCount(+prompt('Введите расстояние(км):')));

// Задание 3
alert(car.quantityOfYears());