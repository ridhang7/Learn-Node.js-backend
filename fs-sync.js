const { readFileSync, writeFileSync } = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//Node will create a file if it doesn't exist in the specified location
//Note: In result.txt content inside is getting replace with the existing content
writeFileSync('./content/result.txt', `Here is the result file : ${first}, ${second}`);

//Note: In result.txt content inside is getting appended with the existing content
writeFileSync('./content/append.txt', `Here is the result file : ${first}, ${second}`, {flag:'a'});

console.log('done with this task');
console.log('starting the next one');