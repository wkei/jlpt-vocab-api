const fs = require('fs')
const readline = require('readline')
const japanese = require('japanese')

const outDir = './json'

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir)

tabs2json(5)
tabs2json(4)
tabs2json(3)
tabs2json(2)
tabs2json(1)

function tabs2json(level) {
  const inFileEng = `tabs/n${level}-vocab-kanji-eng.anki.html`
  const inFileHiragana = `tabs/n${level}-vocab-kanji-hiragana.anki.html`
  const outFile = `${outDir}/n${level}.json`
  Promise.all([
    parseFile(inFileEng, 'eng'),
    parseFile(inFileHiragana, 'hiragana'),
  ]).then(function ([list, hiragana]) {
    const content = list.map((item) => {
      item.furigana = hiragana[item.word] || ''
      item.romaji = getRomaji(item.hiragana || item.word)
      item.level = level
      return item
    })
    output(outFile, content)
  })
}

function parseFile(file, type) {
  return new Promise(function (resolve, reject) {
    const rl = readline.createInterface({ input: fs.createReadStream(file) })
    const content = type === 'eng' ? [] : {}

    rl.on('line', (line) => {
      const data = line.match(/<span class="[^<]*">([^<]*)<\/span>/g)
      if (data) {
        if (type === 'eng') {
          const word = splitSlash(getInnerText(data[0]))
          const meaning = splitComma(getInnerText(data[1] || '')).replace(
            /^,/,
            ''
          )
          content.push({ word, meaning })
        } else if (type === 'hiragana') {
          const word = splitSlash(getInnerText(data[0]))
          const hiragana = splitSlash(getInnerText(data[1] || ''))
          content[word] = hiragana
        }
      }
    })

    rl.on('close', () => {
      resolve(content)
    })
  })
}

function getInnerText(str) {
  let text = ''
  if (str) {
    const matched = str.match(/<span class="[^<]*">([^<]*)<\/span>/)
    if (matched) {
      text = matched[1]
    }
  }
  return text
}

function getRomaji(words) {
  const romajis = words.split(/\s\/\s/).map((word) => japanese.romanize(word))
  return romajis.join(' / ')
}

function output(file, content) {
  fs.writeFile(file, JSON.stringify(content), () => {
    console.log('Wrote', content.length, 'words to', file)
  })
}

function splitComma(str) {
  return str.replace(/\S(,|;)\S/g, ($1, $2) => $1.replace($2, `${$2} `))
}

function splitSlash(str) {
  return str.replace(/\S(\/)\S/g, ($1, $2) => $1.replace($2, ` ${$2} `))
}
