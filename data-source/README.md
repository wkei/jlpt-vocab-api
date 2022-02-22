# Data Source

All data is downloaded from http://www.tanos.co.uk/jlpt/

## Build Command

```
yarn
yarn build
```

## Build Flow

- Anki files based on JLPT Level
- ↓ `anki2tabs.sh`
- Tabs files based on JLPT Level
- ↓ `tabs2json.js`
- JSON files based on JLPT Level
- ↓ `json2db.js`
- All in one JSON file

## Data Structure

```json
{
  "word": "毎朝",
  "meaning": "every morning",
  "hiragana": "まいあさ",
  "romaji": "maiasa",
  "level": 5,
  "uuid": "1adcbfaaea2489d61ef5122af3542a87"
}
```
