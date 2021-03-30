/**
 * Vòng lặp
 */

// For loop
for (var i = 1; i < 10; i++) {
    //console.log(i);
}

var array = [
    '1', 
    '2',
    '3'
]

for (var i = 0; i < array.length; i++) {
    //console.log(array[i]);
}

// For in

for (var key in array) {
    //console.log(key);
}

for (var key in array) {
    //console.log(array[key]);
}

var string = 'Hoang Van Son';

for (var key in string) {
    //console.log(string[key]);
}

// For of : không lấy được giá trị của Object

var language = [
    'Java', 'PHP', 'Python'
]

for (var value of language) {
    //console.log(value);
}

var myInfor = {
    name: 'Son',
    age: '24'
}

for (var value of Object.values(myInfor)) {
    //console.log(value);
}

// While loop
var i = 0;
while (i < 10) {
    //console.log(i);
    i++;
    
}

// Do - While loop
var i = 0;

do {
    //console.log(i);
    i++;    
} while (i < 10);
    
// Continue

for (var i = 0; i < 10; i++) {
    if(i%2 == 0){
        continue;
    }
   
    console.log(i);
}

// Nested loop - Vòng lặp lồng nhau
