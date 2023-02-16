const fs = require("fs");

const data = fs.readFileSync("./homework.txt", "utf-8");
// console.log(data);

fs.writeFileSync("log.txt", data);
// console.log("BERHASIL DITULIS");
