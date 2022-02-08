const fs = require("fs");
const crypto = require("crypto");

const levels = [5, 4, 3, 2, 1];
const outFile = "db.json";

const md5 = (str) => crypto.createHash("md5").update(str).digest("hex");

let vocab = [];

levels.forEach((level) => {
  const file = `json/n${level}.json`;
  const content = fs.readFileSync(file);
  let data = JSON.parse(content);
  data = data.map((d) => {
    d.uuid = md5(`${d.word}_${d.hiragana}_${d.level}_${d.meaning}`);
    return d;
  });
  vocab = vocab.concat(data);
});

fs.writeFile(outFile, JSON.stringify(vocab), () =>
  console.log("Wrote", vocab.length, "words to", outFile)
);
