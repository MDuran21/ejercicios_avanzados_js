//4.1
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
let index = undefined
let found = false
findArrayIndex(mainCharacters, 'Anakin')

function findArrayIndex(array, text) {
  for (let position of array) {
    if (position === text) {
      found = true
    }
  }
  if (found === true) {
    index = array.indexOf(text)
    console.log(
      `${text} is in the position ${array.indexOf(text)} of the array`
    )
  } else {
    console.log(`${text} is not in the array`)
  }
}
//4.2
if (found === true) {
  removeItem(mainCharacters, index)
}

function removeItem(array, index) {
  array.splice(index, 1)
  console.log(array)
}

//Para poder quitar 3 nombres a la vez solo haría falta juntar en una funcion las dos anteriores y que se ejecuten secuencialmente con los nombres que quieres eliminar
