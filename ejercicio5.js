let selection = 8
const random = rollDice(selection)
console.log(
  `El numero aleatorio que ha salido tirando un dado de ${selection} caras es ${random}`
)
function rollDice(selection) {
  return Math.floor(Math.random() * selection) + 1
}
