
var logger = log => console.log(log);
logger('dad')


const Course = function(name, price) {
    this.name = name
    this.price = price
}

const javaCourse = new Course('Java', 100)
console.log(javaCourse);

// Không thể dùng arrow function với Object constructor


// Class in ES6
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student = new People('Son', 24);
console.log(student);