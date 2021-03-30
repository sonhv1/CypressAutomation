function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Hoang', 'Son');
console.log(author);
console.log(author.constructor);
console.log(author.constructor === User);
author.title = 'DASDA';
console.log(author.getName());


// Object prototype
User.prototype.className = 'A1';

User.prototype.getClassName = function () {
    return this.className;
}

console.log(author);
console.log(author.className);
console.log(author.getClassName());