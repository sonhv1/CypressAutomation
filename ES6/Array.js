/**
 * Array methods:
 *  forEach()
 *  every()
 *  some()
 *  find()
 *  filter()
 *  map()
 *  reduce()
 */

var student = [
    {
        id: '1',
        name: 'Son',
        age: 24
    },
    {
        id: '2',
        name: 'Hien',
        age: 18
    },
    {
        id: '3',
        name: 'Lan',
        age: 18
    },
    {
        id: '4',
        name: 'Quang',
        age: 18
    }
];

student.forEach(function (student) {
    //console.log(student);
})

/**
 *  Every() : Kiểm tra xem có phải tất cả các 
 phần tử của mảng có thỏa mãn cùng 1 điều kiện hay không
 Trả về kiểu Boolean
 * */ 

var adult = student.every(function (student, index) {
    return student.age >= 18;    
})
//console.log(adult);

/**
 * some(): Kiểm tra khi 1 phần tử trong mảng thỏa mãn 1 điều kiện nào đó hay không
 * Trả về boolean
 * Khi một phần tử thỏa mãn điều kiện, trả về kết quả True luôn
 */

var adult = student.some(function (student, index) {
    return student.age < 18;    
})
//console.log(adult);

/**
 * Find(): Trả về 1 phần tử thỏa mãn điều kiện tìm kiếm
 */

 var adult = student.find(function (student, index) {
    return student.name === 'Hien';
})
//console.log(adult);

/**
 * filter(): Trả về tất cả phần tử thỏa mãn điều kiện tìm kiếm
 */

var adult = student.filter(function (student, index) {
    return student.age === '18';
})
//console.log(adult);

/**
 * Array map: Duyệt qua từng phần tử của mảng, mỗi khi gọi đến 1 phần tử, truyền vào function()
 */

var newStudent = student.map(function (student, index){
    return {
    id: student.id,
    name: `Hoang ${student.name}`,
    age: student.age,
    rank: 'S',
    index: index
    }

});
//console.log(newStudent);


/**
 * Reduce(): 
 */

var totalAge = student.reduce(function (accumulator, currentVale) {
    return accumulator + currentVale.age;
}, 0);

console.log(totalAge);

