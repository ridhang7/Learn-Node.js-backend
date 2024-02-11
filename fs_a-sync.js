const { readFile, writeFile} = require('fs');

console.log('Start');

//a-sync functtions
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/a-sync.txt',`Here is the result file : ${first}, ${second}`, (err, result) => {
            if (err){
                console.log(err);
                return
            }
            console.log('done with first task');
        });
    })
})

console.log('start with the new task');

