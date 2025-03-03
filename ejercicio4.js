const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

findArrayIndex(mainCharacters, 'Luke')

function findArrayIndex(array, text) {
  let found = false
  for (let position of array) {
    if (position === text) {
      found = true
    }
  }
  if (found === true) {
    console.log(
      `${text} is in the position ${array.position.IndexOf(text)} of the array`
    )
  } else {
    console.log(`${text} is not in the array`)
  }
}
