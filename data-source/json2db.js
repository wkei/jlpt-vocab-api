const fs = require('fs')

const levels = [5, 4, 3, 2, 1]
const outDir = './db'
const outFile = `${outDir}/all.json`

let vocab = []
for (let level of levels) {
  const file = `${outDir}/n${level}.json`
  const content = fs.readFileSync(file)
  let data = JSON.parse(content)
  vocab = vocab.concat(data)
}

fs.writeFile(outFile, JSON.stringify(vocab), () =>
  console.log('Wrote', vocab.length, 'words to', outFile)
)
