
// //way 1 accessing the 
// const http=require('http');
// //the below code is costume file
// const routes=require('./routes');
// const server=http.createServer(routes);
// server.listen(3000);


//way 2 accessing the 
const http=require('http');
//the below code is costume file
const routes=require('./routes');
console.log(routes.someText);
const server=http.createServer(routes.handler);
server.listen(3000);