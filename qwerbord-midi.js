const keyboard = {
  "0": { "index": 9, "row": 3, "active": false },
  "1": { "index": 0, "row": 3, "active": false },
  "2": { "index": 1, "row": 3, "active": false },
  "3": { "index": 2, "row": 3, "active": false },
  "4": { "index": 3, "row": 3, "active": false },
  "5": { "index": 4, "row": 3, "active": false },
  "6": { "index": 5, "row": 3, "active": false },
  "7": { "index": 6, "row": 3, "active": false },
  "8": { "index": 7, "row": 3, "active": false },
  "9": { "index": 8, "row": 3, "active": false },
  "z": { "index": 0, "row": 0, "active": false },
  "x": { "index": 1, "row": 0, "active": false },
  "c": { "index": 2, "row": 0, "active": false },
  "v": { "index": 3, "row": 0, "active": false },
  "b": { "index": 4, "row": 0, "active": false },
  "n": { "index": 5, "row": 0, "active": false },
  "m": { "index": 6, "row": 0, "active": false },
  ",": { "index": 7, "row": 0, "active": false },
  ".": { "index": 8, "row": 0, "active": false },
  "/": { "index": 9, "row": 0, "active": false },
  "a": { "index": 0, "row": 1, "active": false },
  "s": { "index": 1, "row": 1, "active": false },
  "d": { "index": 2, "row": 1, "active": false },
  "f": { "index": 3, "row": 1, "active": false },
  "g": { "index": 4, "row": 1, "active": false },
  "h": { "index": 5, "row": 1, "active": false },
  "j": { "index": 6, "row": 1, "active": false },
  "k": { "index": 7, "row": 1, "active": false },
  "l": { "index": 8, "row": 1, "active": false },
  ";": { "index": 9, "row": 1, "active": false },
  "'": { "index": 10, "row": 1, "active": false },
  "q": { "index": 0, "row": 2, "active": false },
  "w": { "index": 1, "row": 2, "active": false },
  "e": { "index": 2, "row": 2, "active": false },
  "r": { "index": 3, "row": 2, "active": false },
  "t": { "index": 4, "row": 2, "active": false },
  "y": { "index": 5, "row": 2, "active": false },
  "u": { "index": 6, "row": 2, "active": false },
  "i": { "index": 7, "row": 2, "active": false },
  "o": { "index": 8, "row": 2, "active": false },
  "p": { "index": 9, "row": 2, "active": false },
  "[": { "index": 10, "row": 2, "active": false },
  "]": { "index": 11, "row": 2, "active": false },
  "-": { "index": 10, "row": 3, "active": false },
  "=": { "index": 11, "row": 3, "active": false }
}

const midiFrequencies = [
  8.18, 8.66, 9.18, 9.72, 10.3,
  10.91, 11.56, 12.25, 12.98, 13.75,
  14.57, 15.43, 16.35, 17.32, 18.35,
  19.45, 20.6, 21.83, 23.12, 24.5,
  25.96, 27.5, 29.14, 30.87, 32.7,
  34.65, 36.71, 38.89, 41.2, 43.65,
  46.25, 49, 51.91, 55, 58.27,
  61.74, 65.41, 69.3, 73.42, 77.78,
  82.41, 87.31, 92.5, 98, 103.83,
  110, 116.54, 123.47, 130.81, 138.59,
  146.83, 155.56, 164.81, 174.61, 185,
  196, 207.65, 220, 233.08, 246.94,
  261.63, 277.18, 293.66, 311.13, 329.63,
  349.23, 369.99, 392, 415.3, 440,
  466.16, 493.88, 523.25, 554.37, 587.33,
  622.25, 659.26, 698.46, 739.99, 783.99,
  830.61, 880, 932.33, 987.77, 1046.5,
  1108.73, 1174.66, 1244.51, 1318.51, 1396.91,
  1479.98, 1567.98, 1661.22, 1760, 1864.66,
  1975.53, 2093, 2217.46, 2349.32, 2489.02,
  2637.02, 2793.83, 2959.96, 3135.96, 3322.44,
  3520, 3729.31, 3951.07, 4186.01, 4434.92,
  4698.64, 4978.03, 5274.04, 5587.65, 5919.91,
  6271.93, 6644.88, 7040, 7458.62, 7902.13,
  8372.02, 8869.84, 9397.27, 9956.06, 10548.08,
  11175.3, 11839.82, 12543.85
]

let rowOffset = 3
let lowestNote = 60
const DEFAULT_BPM = 480

const keyToMidiNote = (key) => {
  const keyData = keyboard[key]
  return (
    lowestNote +
    keyData.index +
    keyData.row * rowOffset
  )
}

const midiNoteToFrequency = (midiNote) => {
  return midiFrequencies[midiNote]
}

const keyToFrequency = (key) => {
  return midiNoteToFrequency(keyToMidiNote(key))
}

Object.keys(keyboard).forEach(key => {
  const keyboardKey = document.createElement('div')
  keyboardKey.style.gridRowStart = 4 - keyboard[key].row
  keyboardKey.style.gridRowEnd = 4 - keyboard[key].row + 1
  keyboardKey.style.gridColumnStart = keyboard[key].index
  keyboardKey.style.gridColumnEnd = keyboard[key].index + 1
  keyboardKey.className = 'keyboard-key'
  keyboardKey.id = key

  const keyboardKeyLabel = document.createElement('div')
  keyboardKeyLabel.className = 'keyboard-key_label'
  keyboardKeyLabel.innerText = key

  keyboardKey.appendChild(keyboardKeyLabel)
  document.querySelector('.keyboard').appendChild(keyboardKey)
})

const synth = new Tone.MembraneSynth({
	"octaves" : 1,
	"pitchDecay" : 0.1
}).toMaster()

const sequencer = document.querySelector('.sequencer')
sequencer.addEventListener('keydown', (e) => {
  const keyObj = keyboard[e.key]
  if (!keyObj) {return}
  if (keyObj.active) {return}
  synth.triggerAttack(keyToFrequency(e.key))
  keyObj.active = true
  document.getElementById(e.key).classList.add('active')
})

sequencer.addEventListener('keyup', (e) => {
  const keyObj = keyboard[e.key]
  if (!keyObj) {return}
  synth.triggerRelease()
  keyObj.active = false
  document.getElementById(e.key).classList.remove('active')
})

let loop

sequencer.onfocus = e => {
  if (loop) {loop.stop()}
  Tone.Transport.stop()
}

sequencer.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || sequencer.selectionEnd !== sequencer.selectionStart) { return }

  switch (e.key) {
    case 'ArrowLeft': 
      console.log(sequencer.selectionStart);
      const freq = keyToFrequency(sequencer.value.charAt(sequencer.selectionStart - 1))
      if (!freq) {return}
      synth.triggerAttackRelease(
        freq,
        '8n');
      break
    case 'ArrowRight': synth.triggerAttackRelease(
      keyToFrequency(sequencer.value.charAt(sequencer.selectionStart)),
      '8n')
    }
  }
)

const playPauseButton = document.querySelector('.button-play-pause')

playPauseButton.onclick = e => {
  let text = sequencer.value
  const match = text.match(/^`(\d+)`/)

  if (match) {
    console.log(match)
    Tone.Transport.bpm.value = match[1]
    text = text.slice(match.index + match[0].length)
    console.log(text)
  } else {
    Tone.Transport.bpm.value = DEFAULT_BPM;
  }

  const sequence = text.replace(/[^zxcvbnm,\./asdfghjkl;'qwertyuiop\[\]1234567890\-=\\\|]/g, '')

  if (sequence === '') { return }

  loop = new Tone.Loop(time => {
    sequence.split('').forEach((character, index) => {
      if (character.match(/[\\|]/)) { return }

      const time = `+0:${index}:0`
      synth.triggerAttackRelease(keyToFrequency(character), '4n', time)

      Tone.Transport.schedule(() => {
        document.getElementById(character).classList.add('active')
      }, time)

      Tone.Transport.schedule(() => {
        document.getElementById(character).classList.remove('active')
      }, `+0:${index + 1}:0`)
    })
  }, `0:${sequence.length}:0`)

  loop.start()
  Tone.Transport.start()
}