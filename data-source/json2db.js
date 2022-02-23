const fs = require('fs')
const crypto = require('crypto')

const levels = [5, 4, 3, 2, 1]
const outFile = 'db.json'

const md5 = (str) => crypto.createHash('md5').update(str).digest('hex')

let vocab = []

levels.forEach((level) => {
  const file = `json/n${level}.json`
  const content = fs.readFileSync(file)
  let data = JSON.parse(content)
  data = data.map((d) => {
    d.uuid = md5(`${d.word}_${d.level}`)
    return d
  })
  vocab = vocab.concat(data)
})

const plainText = JSON.stringify(vocab).replace(/​/g, '') // remove invisible character

fs.writeFile(outFile, plainText, () =>
  console.log('Wrote', vocab.length, 'words to', outFile)
)
