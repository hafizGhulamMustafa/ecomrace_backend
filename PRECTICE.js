// const app = require('./app');

// let a= 10;
// var b="10";
// if (a==b){
//     console.log("triple equal");
// }
// else
// console.log("two equal");

// console.log(app);

// const a = [23,24,25,26,2,3,4];
// const r =a.filter((p)=>{
//     console.log(p);
// })

// const fs=require('fs')
// fs.writeFileSync("text.txt" , "hello this is sample file");

// const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write("<h1> hello i am Ghulam ali and i am mers stack developer </h1>");
//     resp.end();
// }).listen(4500);
// console.log('my name is khan ')
// console.log(100+20);

// const http = require('http')
// const data = require('./data');

// http.createServer((req, resp)=>{
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(3001);

// const http = require('http');
// const data = require('./data');

// http.createServer((req, resp) =>{
//     resp.writeHead(200,{'contect-type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4000);

// const fs = require(fs);
// const input = process.argv;
// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else {console.log("invalid input")};

// fs.writeFileSync(input[2],input[3]);

//  const result = require('./data');
// const name = result.name
// const data = result.data

// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'contect-type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.write(JSON.stringify(name));
//     resp.end();
// }).listen(3000);

// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// const fs = require('fs');
// const input= process.argv;

// fs.unlinkSync(input[2],input[3]);

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files/info');

// // for(i=0; i<5; i++){
// //     fs.writeFileSync(dirPath+`/hello${i}.txt`, "hello this is my sample files");
// // }
// fs.readdir(dirPath,(err,file)=>{
//     file.forEach((a)=>{
//         console.log(a);

//     })
// })

// const path = require('path');
// const fs = require('fs');
// const dirpat = path.join(__dirname, 'files');
// const filepath =  `${dirpat}/hello0.txt'`
// // console.log(dirpat)

// // for(i=0; i<5; i++){
// //     fs.unlinkSync(dirpat+`/hello${i+1}.txt`, "this is file made by me")
// // }

// fs.readFile(filepath, (err, item)=>{
//     console.log(item)
// })

// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname , 'files');
// const filepath = `${dirpath}/hello0.txt`;

// fs.appendFile(filepath,"and the file name is ghulam mustafa",(err)=>{
//     if(!err) console.log("updated successfully")
// })

// fs.readFile(filepath,'utf8', (err, item)=>{
//     console.log(item);
// })

// fs.rename(filepath, `${dirpath}/infoFile.txt`, (err)=>{
//     if (!err) console.log("rename successfully");
// })

// fs.unlinkSync(`${dirpath}/infoFile.txt`);

// const a = 10;
// let b = 0;

// const waiting = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(30)
//     }, 1000);
// })

// waiting.then((data)=>{
//     b=data;
// console.log(a+b);
// })
// const a = 10 
// let b ;

// console.log("first print");

//  setTimeout(() => {
//   console.log("2 second");
//   b=20;
// }, 2000);

// setTimeout(() => {
//   console.log("0 second");
//   console.log(b);
// }, 0);

// console.log("second print");

// const fs = require('fs');
// const http = require('http')

// http.createServer((req, resp)=>{
//     resp.write("hello my name is khan");
//     resp.write("hello my name is khan");
//     resp.end();

// }).listen(3000);





