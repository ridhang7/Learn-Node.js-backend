const os = require('os');
const path = require('path');

//info about current user
const user = os.userInfo()

console.log(user);

console.log(os.uptime());

const currentSystem = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentSystem);




console.log(path);
console.log(path.sep);

//join method is used to get normalized path of the given filepath based on which os user is executing on

//basename return the base filename of the path given as parameter