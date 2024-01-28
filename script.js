class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return `${this.title} rented successfully.`;
      } else {
        return `${this.title} is not available for rent.`;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      return `${this.title} returned successfully.`;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre, availableCopies) {
      const movie = new Movie(title, genre, availableCopies);
      this.movies.push(movie);
    }
  
    listMovies() {
      return this.movies.map(movie => `${movie.title} - ${movie.genre} - Available Copies: ${movie.availableCopies}`);
    }
  
    rentMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        return movie.rentMovie();
      } else {
        return 'Movie not found.';
      }
    }
  
    returnMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        return movie.returnMovie();
      } else {
        return 'Movie not found.';
      }
    }
  }
  
  // Example usage
  const movieStore = new MovieStore();
  
  movieStore.addMovie('The Flash', 'Sci-Fi', 5);
  movieStore.addMovie('Fast and Furious', 'Drama', 3);
  
  console.log(movieStore.listMovies());
  
  console.log(movieStore.rentMovie('The Flash'));
  console.log(movieStore.rentMovie('Fast and Furious'));
  
  console.log(movieStore.listMovies());
  
  console.log(movieStore.returnMovie('The Flash'));
  
  console.log(movieStore.listMovies());
  