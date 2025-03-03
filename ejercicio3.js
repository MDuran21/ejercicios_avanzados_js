const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let typesCount = {
  existence: [],
  count: []
}

favoritesNames(users)
solution(typesCount)

function favoritesNames(users) {
  for (let user of users) {
    for (let favorite in user.favoritesSounds) {
      if (!typesCount.existence.includes(favorite)) {
        typesCount.existence.push(favorite)
        typesCount.count.push(1)
      } else {
        for (let i = 0; i < typesCount.existence.length; i++) {
          if (favorite === typesCount.existence[i]) {
            typesCount.count[i] += 1
          }
        }
      }
    }
  }
}

function solution(typesCount) {
  console.log('')
  for (let i = 0; i < typesCount.existence.length; i++) {
    console.log(
      `Tienen en favoritos ${typesCount.existence[i]} ${typesCount.count[i]} vez/veces`
    )
  }
  //Podria haber hecho un condicional secillo para imprimir vez o veces dependiendo del count
  console.log('')
}
