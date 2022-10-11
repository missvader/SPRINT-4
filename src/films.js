const movies = require("./data");

// Exercise 1: Get the array of all directors.
//con map recorremos array movies y devolvemos nuevo array 
function getAllDirectors(movies) {
  let result= [];
  result = movies.map(movie => movie.director);
  
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
  //usamos filter para crear nuevo array con las movies que cumplan condicion
function getMoviesFromDirector(movies, director) {
 let moviesFromDirector = movies.filter(movie => movie.director === director);
 console.log("Exercice 2 ->", moviesFromDirector);
 return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
  //iteramos sobre array con forEach, si se cumple condic. guardamos scores en nueva variable.
  //con reduce() sumamos las scores del array
function moviesAverageOfDirector(movies, director) {
  let averageOfDirector = 0;
  let scoreDirector = [];
  movies.forEach(movie => {
    if (movie.director === director){
      scoreDirector.push(movie.score)
    }
  });
  let sumaScore = scoreDirector.reduce((a,b)=> a+b);
  averageOfDirector = sumaScore / scoreDirector.length;
  console.log("Exercice 3 ->",averageOfDirector);
  return averageOfDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
