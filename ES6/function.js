function myFunction() {
    alert('Son')
}

myFunction();

function writeLog() {
    console.log(arguments);
}

writeLog();

function writeLog2() {
    var string = '';
    for(var param of arguments) {
        string += `${param} - `;
    }
    console.log(string);
}

writeLog2('1', '2');

function showMessage() {
    var name = 'Son';
    console.log(name);
}
 
showMessage();
