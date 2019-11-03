const keyboard = [
  [ "z", "x", "c", "v", "b", "n", "m", ",", ".", "/" ],
  [ "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'" ],
  [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]" ],
  [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ]
]

const getCoordinates = (key) => {
  for (i=0;i<keyboard.length;i++) {
    index = keyboard[i].indexOf(key)
    if (index > -1) {
      return { index: index, row: i}
    }
  }
  return null
}

const buildMap = () => {
  return keyboard.reduce((acc, currentRow) => {
    const accCopy  = { ...acc }
    currentRow.forEach((key) => {
      accCopy[key] = getCoordinates(key)
    })
    return accCopy
  }, {})
}

const pre = document.createElement('pre')
pre.innerText = JSON.stringify(buildMap(), null, 2)
document.body.appendChild(pre)