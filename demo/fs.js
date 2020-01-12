//File system
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// fs.mkdir(path.join(__dirname, 'test'), (err)=> {
//     if(err){
//         throw err
//     }
//     console.log('Папка создана');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

console.log(filePath);

// fs.writeFile(filePath, 'Hello NodeJs', err => {
//     if(err){
//         throw err;
//     }

//     fs.appendFile(filePath, "\nПривет я разработчик на NodeJs", err => {
//         if(err){
//             throw err;
//         }

//         console.log("Файл ", filePath, "был перезаписан");
//     })
//     console.log("Файл создан");
// });


fs.readFile(filePath, 'utf-8',(err, content) => {
    if(err){
        throw err;
    }
    console.log('Content', chalk.red(content));
    // const data = Buffer.from(content);
    // console.log('Content: ', content.toString());
});

