#!/bin/bash

function parse {
  FILE=$1  
  sqlite3 -header anki/$FILE <<EOF
.mode tabs
.out tabs/$FILE.html
select question, answer from cards;
EOF
  echo "Created tabs/$FILE.html"
}

rm -fr tabs
mkdir tabs

parse n1-vocab-kanji-eng.anki
parse n1-vocab-kanji-hiragana.anki
parse n2-vocab-kanji-eng.anki
parse n2-vocab-kanji-hiragana.anki
parse n3-vocab-kanji-eng.anki
parse n3-vocab-kanji-hiragana.anki
parse n4-vocab-kanji-eng.anki
parse n4-vocab-kanji-hiragana.anki
parse n5-vocab-kanji-eng.anki
parse n5-vocab-kanji-hiragana.anki