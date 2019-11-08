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

// cfr586rf cfr586rf cfr586rf cfr586rf
// cdr486rd cdr486rd cdr486rd cdr486rd 

// cfr586rf cfr586rf cfr586rf cfr586rf
// cdr486rd cdr486rd cdr486rd cdr486rd 

// zsw364ws zsw364ws zsw364ws zsw364ws 
// zaw264wa zaw264wa zaw264wa zaw264wa 

// zsw364ws zsw364ws zsw364ws zsw364ws 
// zaw264wa zaw264wa zaw264wa zaw264wa

// njko-9ok njko-9ok njko-9ok njko-9ok
// njki-9ik njki-9ik njki-9ik njki-9ik  

// njko-9ok njko-9ok njko-9ok njko-9ok
// njki-9ik njki-9ik njki-9ik njki-9ik 

// vghu97uh vghu97uh vghu97uh vghu97uh 
// vghy97yh vghy97yh vghy97yh vghy97yh 

// vghu97uh vghu97uh vghu97uh vghu97uh 
// vghy97yh vghy97yh vghy97yh vghy97yh 




// ft|dt|vt|ct| ft|dt|vt|ct|
// hy|gy|fy|dy| hy|gy|fy|di|

// ft5dt5vt5ct5 ft5dt5vt5ct5
// hy7gy7fy7dy7 hy7gy7fy7dyi



//ft|dt|vt|ct|xy
//ft|dt|vt|ct|xy
//.l|,l|ml|nl|vl
//.l|,l|ml|nl|vl
// ^ the //s are part of it on this one



// s||s||y|||y||y||
// s||s||y|||8068ry
// s||s||y|||y||y||
// s||s||y|||08oyjf

// cfr676rf cfr676rf cfr676rf cfr676rf 
// cgy676yg cgy676yg cgy676yg cgy676yg 
// bji898ij bji898ij bji898ij bji898ij 
// cgy676yg cgy676yg cgy676yg cgy676yg 


// blerp|blerp|blerp|blerp|
// xler[|xler[|xler[|xler[|
// xfhj[|xfhj[|xfhj[|xfhj[|
// xfhjp|xfhjp|xfhjp|xfhjp|

// a|d|f|e|t|f|d|y|
// o|p|y|r|t|e|f|d|
// a|f|t|6|9|7|t|f|
// d|7|9|7|6|y|t|e|
// w|5|7|5|u|j|h|f|
// d|y|i|y|t|g|f|s|
// a|r|y|r|e|a|d|f|
// r|t|f|d|a|7|k|f|

// alt ending
// a|d|f|e|t|f|d|y|
// o|p|y|r|t|e|f|d|
// a|f|t|6|9|7|t|f|
// d|7|9|7|6|y|t|e|
// w|5|7|5|u|j|h|f|
// d|y|i|y|t|g|f|s|
// a|r|y|r|e|c|a|d|
// f|h|d|f|a|7|k|f|


// c||b||f|||j|||||
// c||b||f|||j|||||
// y||j||f|||b|||||
// y||j||f|||b|||||

// 60||||60||||60||||
// 60||||60||||60||||
// 68||||68||||68||||
// 68||||68||||68||||



// \\h\\e\\u\\\\f\\
// \\h\\e\\u\\\\f\\
// \\h\\e\\i\\\\d\\
// \\h\\e\\i\\\\d\\



// 0|b|p|w| i|b|p|w|
// 0|b|p|w| i|b|p|w|

// =|v|p|e| i|v|p|e|
// =|v|p|e| i|v|p|e|


// v||vv|v||vv|v|k|
// c||cc|c||cc|c|l|
// z||zz|z||zz|z|;|
// c||cc|c||cc|c|l|



// c||f||x||c||5||3||f||r||
// c||f||x||c||5||3||f||r||
// c||f||x||c||5||3||f||r||
// c||f||x||c||5||3||f||r||

// b||g||v||b||0||8||g||y||
// b||g||v||b||0||8||g||y||
// b||g||v||b||0||8||g||y||
// x||g||v||b||6||5||r||s||


// `300`
// n]-n=n-] n]-n=n-] n]-n=n-] n]-n=n-] 
// zu6z7z6u zu6z7z6u zu6z7z6u zu6z7z6u 
// vp9v0v9p vp9v0v9p vp9v0v9p vp9v0v9p
// co8c9c8o co8c9c8o co8c9c8o co8c9c8o 

// `240`
// n]-n=n-] n]-n=n-] n]-n=n-] n]-n=n-] 
// zu6z7z6u zu6z7z6u zu6z7z6u zu6z7z6u 
// vp9v0v9p vp9v0v9p vp9v0v9p vp9v0v9p
// nkuninuk nkuninuk nkuninuk nkuninuk 

// `300`
// 1881881881881180
// e88e88e88e88ee=0
// q55q55q55q55qq58
// e88e88e88e88ee86

// `200`
// zdr4rdzdr4rd
// cdr6rdcdr6rd
// cdt6tdcdt6td
// bgu8ugbgu8ug

// `200`
// bgybgygb
// vguvgugv
// cgycgygc
// vfyvfyfv

// u7\u-\u7\u-\7u-\
// y7\y=\y7\y=\7y=\
// t7\t-\t7\t-\7t-\
// y6\y-\y6\y-\6y-\