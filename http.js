const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Welcome to our home page');
        return
    }

    if (req.url === '/about'){
        res.end('This is our about page');
        return
    }
    else {
        res.end(`<h1> Oops!</h1>
        <p>The page you are looking for doesn't exist</p>
        <a href= '/'>Back home</a> 
        `);
    }
});

server.listen(5000, ()=>{
    console.log('Server is listening to port 5000...');
})
