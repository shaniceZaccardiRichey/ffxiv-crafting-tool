const fs = require("fs");
const { parse } = require("csv-parse");

console.log("Hello World!");


fs.createReadStream("./Item.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    
    if(row[1]){
        console.log(
        `${row[0]} | ${row[1]}`
        );
    }

  });

  /*
  fs.createReadStream("./Recipe.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    
    if(row[4] == 35032){
        console.log(row[0], row);
    }
   
  });
  */
