/**
 *
 */
// console.log('Hi im Taaaa')
// console.warn('adasd')
// console.error('aA');
// confirm('Greater than 18 ?')
// prompt('Xac nhan tuoi: ');
// setTimeout(function(){
// alert('Thong bao')
//}, 2000)
// setInterval(function() {
//     console.log('day la' + Math.random)
// }, 2000)
 

// // number type
// var a = 5;

// // String type
// var name = 'Son';
// var s = 'Hoang \'Son';

// // Boolean 
// var s = true;
// var h = false;

// // Undefined type
// var x;

// console.log(x);

// // Null type
// var y = null;

// //Symbol
// var id = Symbol('id'); // unique
// var id2 = Symbol('id');
// console.log(id == id2);

// // Function (Complex type)
// var myFunction = function() {
//     alert('hi');
// }

// myFunction();

// // Object type 
// var  myObject = {
//     name: 'Son',
//     age: '24'
// };
// console.log(myObject);

// var myArray = [
//     'java', 'php', 'python'
// ]
// console.log(myArray);

/**
 * ===
 * !==
 */
var a = 1.4;
var b = 'Hoang Van Son  ';
console.log(a === b); // => false (compare both value and data type)
console.log(a == b); // => true (compare value)

console.log(b.slice(1, 3)); 
console.log(b.replace(/o/g, 'a')); // Thay the tat ca ki tu 'o' bang ki tu 'a'
console.log(b.toUpperCase());
console.log(b.toLocaleLowerCase());
console.log(b.trim().length); // bo khoang trang o 2 dau
console.log(b.split('o')); // Cat boi ki tu 'o'
console.log(b.charAt(3));

console.log(a.toFixed()); // lam tron

/**
 * Tao mang
 */
var language = [
    'Java',
    'PHP',
    'Python',
    function(){}
]
console.log(language);

var language2 = new Array('Java',
'PHP',
'Python',
function(){})

// console.log(language2);
// console.log(Array.isArray(language));
// console.log(language.length);
// console.log(language[2]);

/**
 * Array methods
 */

var arr = [
    '1',
    '2',
    '3'
]

console.log(typeof arr);
console.log(arr.join); // Bien 1 array thanh 1 chuoi
console.log(arr.join('-')); 
console.log(arr.pop()); // Xoa bo phan tu cuoi mang va tra ve phan tu da xoa
console.log(arr.push('4')); // them phan tu vao mang
console.log(arr);
console.log(arr.shift()); // Xoa bo phan tu dau mang va tra ve phan tu da xoa
console.log(arr);
console.log(arr.unshift('5')); // chen 1 phan tu vao dau mang
console.log(arr);
arr.splice(1, 1, '7'); // Xoa 2 phan tu tu vi tri 1 va them phan tu '7' vao vi tri 1
console.log(arr);



