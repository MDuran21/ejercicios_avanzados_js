const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

//Creo recordar de otro ejercicio que hacia falta utilizar una copia del array para no ir cambiando el array principal y luego que la funcion haga cosas raras

let result = swap(fantasticFour, 2, 1)
console.log(result)

function swap(array, index1, index2) {
  let newArray = [...array]
  array[index1] = newArray[index2]
  array[index2] = newArray[index1]
  return array
}
