const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

//Nada que ver pero estoy bastante contento de que me saliese a la primera :)

let themes = []
themeList(movies)
console.log(themes)

function themeList(movies) {
  for (let movie of movies) {
    for (let category of movie.categories) {
      if (!themes.includes(category)) {
        themes.push(category)
      }
    }
  }
}
