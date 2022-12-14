const movies = require("./data");

// Exercise 1: Get the array of all directors.
//con map recorremos array movies y devolvemos nuevo array 
function getAllDirectors(movies) {
  let result= [];
  result = movies.map(movie => movie.director);
  
  //console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
  //usamos filter para crear nuevo array con las movies que cumplan condicion
function getMoviesFromDirector(movies, director) {
 let moviesFromDirector = movies.filter(movie => movie.director === director);
 //console.log("Exercice 2 ->", moviesFromDirector);
 return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
  //iteramos sobre array con forEach, si se cumple condic. guardamos scores en nueva variable.
  //con reduce() sumamos las scores del array
  //toFiXed(2) limita a 2 los decimales pero convierte el resultado en string, por eso hay usar parseFloat() para que vuelva a ser number
function moviesAverageOfDirector(movies, director) {
  let averageOfDirector = 0;
  let scoreDirector = [];
  movies.forEach(movie => {
    if (movie.director === director){
      scoreDirector.push(movie.score)
    }
  });
  let sumaScore = scoreDirector.reduce((a,b)=> a+b);
  averageOfDirector = (sumaScore / scoreDirector.length).toFixed(2);
  //console.log("Exercice 3 ->",averageOfDirector);
  return parseFloat(averageOfDirector);
}

// Exercise 4:  Alphabetic order by title 
  //mapeamos array movies para que solo contenga títulos y aplicamos sort() para ordenar alfabeticamente. Reducimos longitud array con el metodo slice() para que si cumple condic. muestre solo 20 primeros resultados.
function orderAlphabetically(movies) {
  let orderAlphabetic = movies.map(movie => movie.title);
  orderAlphabetic.sort();
  //console.log("EXERCISE 4 -> ", orderAlphabetic);
  if(orderAlphabetic.length > 20){
    let top20Movies =orderAlphabetic.slice(0,20);
    //console.log("Top20 ->", top20Movies);
    return top20Movies;
  }else{
    return orderAlphabetic;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesOrderYear = movies.map(movie => movie);
  //metodo sort() para ordenar. Recibe función callback de comparacion, que se  
  //ejecuta con todos los elementos del array. Función -> 2 parámetros, que 
  //toman los valores de los elementos que se estan comparando. 
  moviesOrderYear.sort((movie1 , movie2) =>{
    if(movie1.year < movie2.year){
      return -1;  //movie1 debe ir primero (orden ascendente)
    }else if(movie1.year > movie2.year){
      return 1;   //movie1 debe ir despues
    }else{
      //si no cumple ninguna de las condic.anteriores es que movie.year son iguales. Entonces pasamos a comparar movie.title para ordenar alfabeticamente
      if(movie1.title < movie2.title){
        return -1; 
      }else if(movie1.title > movie2.title){
        return 1;
      }
    }
  })
  //console.log("EXERCISE 5 ->", moviesOrderYear);
  return moviesOrderYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  //usamos filter para que nos devuelva movies que cumplan la condicion 
  let averageByCategory = 0;
  let scoreByCategory = 0;
  let moviesByCategory = movies.filter (movie =>
    movie.genre.includes(genre));
  //iteramos sobre array moviesByCategory para que sume score de cada movie
  moviesByCategory.forEach(movie => 
    scoreByCategory += movie.score);
  //filtramos para que no tenga en consideracion movies con score = "" en el momento de calcular average
  let moviesNoScore = moviesByCategory.filter(movie => movie.score !== "");
  averageByCategory = (scoreByCategory / moviesNoScore.length).toFixed(2);
  //parseFloat() convierte string a number
  return parseFloat(averageByCategory);
}
// Exercise 7: Modify the duration of movies to minutes
  //iteramos sobre array movies y en cada elemento manipulamos movie.duration y creamos variables para hours, minutes, movieDuration y timeToMinutes.
function hoursToMinutes(movies) {
let moviesToMinutes = movies.map(movie => {
  let timeToMinutes = 0;
  let movieDuration = movie.duration.replace(/ /g, "");
  if(movie.duration.includes("h") && movie.duration.includes("min")){
    let hours = parseFloat(movieDuration.slice(0, movieDuration.indexOf("h")));
    let minutes = parseFloat(movieDuration.slice(movieDuration.indexOf("h")+1,movieDuration.indexOf("m")));
    timeToMinutes = (hours * 60)+ minutes;
  }else if(!movie.duration.includes("min")){
    hours = movieDuration.slice(0, movieDuration.indexOf("h"));
    timeToMinutes = parseFloat(hours * 60);
  }else{
    minutes = movieDuration.slice(0, movieDuration.indexOf("m"));
    timeToMinutes = parseFloat(minutes);
  }
    //este es el resultado de cada iteracion. Return --> copia item movie (con spread operator) y establecemos duration en el resultado de timeToMinutes
    return {
      ...movie,
      duration : timeToMinutes
    }
}
);
return moviesToMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
    let moviesByYear = movies.filter(movie => movie.year === year);
    //ordenamos score.movie en orden descendente. films[0] será bestFilm
    let films = moviesByYear.sort((movie1, movie2)=> movie2.score - movie1.score )
    //el metodo Array.of() crea nuevo array
    let bestFilm = Array.of(films[0])
    return bestFilm;
  }




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
