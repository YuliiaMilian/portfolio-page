let array = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi"],
    director: "Christopher Nolan",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: ["Drama"],
    director: "David Fincher",
  },
];

// Create an array of movie titles.
const getMovieTitles = (array) => array.map((movie) => movie.title);
getMovieTitles(array);



// Create an array of movies with a rating higher than 8.5.
const moviesRatingSimple = (array) => {
  return array.filter((movie) => movie.rating > 8.5);
};

moviesRatingSimple(array);



// Sort the movies by rating in descending order.

const moviesDescending = (array) => {
  return array.sort((a, b) => (b.rating - a.rating));
};

moviesDescending(array);



// Create an array of movies released after the year 2000.
const getMoviesReleasedAfter2000 = (array) => {
  return array.filter((movie) => movie.year > 2000);
};

getMoviesReleasedAfter2000(array);



// Sort the movies by year of release in ascending order.
const moviesAscending = (array) => {
  return array.sort((a, b) => (a.year - b.year));
};

moviesAscending(array);



// Create an object that counts the number of movies for each genre.
const countMoviesByGenre = (array) => {
  return array.reduce((acc, movie) => {
    movie.genre.forEach(genre => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    return acc;
  }, {});
};

countMoviesByGenre(array);



// Check if all movies have a rating higher than 7.
const moviesRatingHigher7 = (array) => {
  return array.every((movie) => movie.rating > 7);
};

moviesRatingHigher7(array);



// Calculate the average rating of all movies.
const averageRating = (array) => {
  return array.reduce((acc, movie, __, { length }) => acc + movie.rating / length, 0);
};

averageRating(array);



// Create an array of objects with only the title and rating of each movie.
const arrayTitlesRating = (array) => {
  return array.map(({ title, rating }) => ({ title, rating }));
};

arrayTitlesRating(array);



// Check if there is at least one movie in the "Sci-Fi" genre.
const movieSciFigenre = (array) => {
  return array.some((movie) => movie.genre.includes("Sci-Fi"));
};

movieSciFigenre(array);



// Check if there is at least one movie directed by "Quentin Tarantino".
const directedByTarantino = (array) => {
  return array.some((movie) => movie.director === "Quentin Tarantino");
};

directedByTarantino(array);



// Check if all movies were released after 1990.
const realeseAfter1990 = (array) => {
  return array.every((movie) => movie.year > 1990);
};

realeseAfter1990(array);



// Find the titles of all movies directed by "Christopher Nolan" that have a rating higher than 8.5, sorted by rating in descending order.
const titlesDirectedByNolan = (array) => {
  return array
    .filter(
      (movie) => movie.director === "Christopher Nolan" && movie.rating > 8.5,
    )
    .sort((a, b) => (b.rating - a.rating))
    .map((movie) => movie.title);
};

titlesDirectedByNolan(array);



// Calculate the average rating of movies released before the year 2000 that belong to the "Drama" genre.
const averageRatingMovies = (array) => {
  const filteredMovies = array.filter(
    (movie) => movie.genre.includes("Drama") && movie.year < 2000,
  )
   return filteredMovies.length === 0 
    ? 0 
    : filteredMovies.reduce((acc, movie) => acc + movie.rating, 0) / filteredMovies.length;
};

averageRatingMovies(array);



// Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year.
const moviesRatingHigher8 = (array) => {
  return array
    .filter((movie) => movie.rating > 8.5)
    .sort((a, b) => (a.year - b.year))
    .map((movie) => movie.title);
};

moviesRatingHigher8(array);



// Find the total number of genres covered by movies with a rating higher than 8.8.
const totalNumberOfGenres = (array) => {
  return array
    .filter(movie => movie.rating > 8.8)
    .reduce((acc, movie) => {
      movie.genre.forEach(genre => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []).length;
};

totalNumberOfGenres(array);



// Check if there is at least one movie in the dataset with a rating higher than 9.
const moviesRatingHigher9 = (array) => {
  return array.some((movie) => movie.rating > 9);
};

moviesRatingHigher9(array);



// Check if all movies directed by "Christopher Nolan" have a rating higher than 8.5.
const moviesDirectedByNolan = (array) => {
  return array
    .filter((movie) => movie.director === "Christopher Nolan")
    .every((movie) => movie.rating > 8.5);
};

moviesDirectedByNolan(array);


async function main() {
  const apiUrl = 'https://staging.hlodan.com/brands';
  const brandApiUrl = 'https://api.brandfetch.io/v2/brands/';


  const headers = {
    'Authorization': 'Bearer J2RRXZcCePU5rnRI+102Q92cwnFVcn8UnpBoUcrs87I=',
    'Content-Type': 'application/json'
  };

  let response = await fetch(apiUrl);
  let brands = await response.json();

  console.log(brands);

  let randomBrands = [];
  while (randomBrands.length < 2) {
    let randomBrand = brands[Math.floor(Math.random() * brands.length)];
    if (!randomBrands.includes(randomBrand)) {
      randomBrands.push(randomBrand);
    }
  }
    
  console.log(randomBrands);


    Promise.all([
      fetch(`${brandApiUrl}${randomBrands[0]}.com`, { headers }),
      fetch(`${brandApiUrl}${randomBrands[1]}.com`, { headers })
    ])  .then(async ([r1, r2]) => {
      const [data1, data2] = await Promise.all([
        r1.json(),
        r2.json()
      ]);
  
      console.log([data1, data2]);

      [data1, data2].forEach((data) => {
        const brandElement = document.createElement('div');
  
        const brandName = data.name || 'Brand name not found';
        const brandDescription = data.description || 'Description not found';
        const brandColor = data.colors.map((color) => color.hex) || 'Color not found';
        const brandImages = data.images.map((image) => image.formats) || 'Image not found';
        const image = brandImages[0].map((img) => img.src)

        console.log(image);
  
        brandElement.innerHTML = `
          <p style="color: ${brandColor[0]}">Brand: ${brandName}</p>
          <p style="color: ${brandColor[1 % brandColor.length]}">Description: ${brandDescription}</p>
          <img src="${image[1 % image.length]}" alt="Broken image" width="500" height="600">
        `;
  
        document.body.appendChild(brandElement);
      });
  
    })

}

main();