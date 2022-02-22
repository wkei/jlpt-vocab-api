const fs = require('fs')

const levels = [5, 4, 3, 2, 1]
const outFile = 'db.json'

let vocab = []

levels.forEach((level) => {
  const file = `json/n${level}.json`
  const content = fs.readFileSync(file)
  let data = JSON.parse(content)
  vocab = vocab.concat(data)
})

fs.writeFile(outFile, JSON.stringify(vocab), () =>
  console.log('Wrote', vocab.length, 'words to', outFile)
)
