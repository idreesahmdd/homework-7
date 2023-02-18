const fs = require("fs");

// ---------SYNCHRONOUS------------
const data = fs.readFileSync("./homework.txt", "utf-8");
// console.log(data);

fs.writeFileSync("log.txt", data);
console.log("BERHASIL DITULIS");

// ===================================================================================

//  ---------ASYNCHRONOUS-----------
// fs.readFile("./homework.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data);

//     fs.writeFile("log.txt", data, (err, data) => {
//         if (err) {
//             console.log(err);
//         }

//         console.log("TULIS BERHASIL");
//     });
// });
