const http = require('node:http');
const express = require('express');
const path = require('path');


const app = express();
app.use('/public', express.static('public'));


const server = http.createServer((req, res) => {

    
    res.setHeader('Content-Type', 'text/html');


})

 


   app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


















// const http = require('node:http');
// const fs = require('fs');
// const url = require('url');
// const express = require('express');
// const path = require('path');


// const app = express()
// const hostname = '127.0.0.1';
// const port = 5500;
// app.use(express.static(__dirname + "/public"));
// app.set('view engine', 'ejs');


// const server = http.createServer((req, res) => {

    
    
//     fs.readFile(files, (err, data) => {
//         if (err) {
//             res.writeHead(404, res.writeHead('Content-Type', 'text/html'));
//             return res.end("Page Not Found")
//         }
//         res.statusCode = 200;
//         res.writeHead('Content-Type','text/html');
//         res.write(data);
//         return res.end();
//     })  
// })

//    app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });



// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 