const path = require('path');

// BASE FILE
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

// CONCATENATE PATHS
console.log(path.join(__dirname, 'test', 'hello.html'));