const fs = require('fs');
const path = require('path');

// CREATE FOLD.
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder created...');
});

// function add(val1, val2) {
//     return val1 + val2;
// }

// console.log(add(50, 66));