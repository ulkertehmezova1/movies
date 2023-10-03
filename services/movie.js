const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDAwMDUwOWU2NTMyNmQ3MGIxOGNlMjA0NDEzYzMxNyIsInN1YiI6IjY1MWJjNzYxNjcyOGE4MDBlNDY5Y2VjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnKYuu2m4wzFVAyzF5Lb6YrClaRwB387AhVQYGnbZxw",
  },
};

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path, { query = "" } = {}) {
  await delay(1000);

  try {
    const res = await fetch(`${BASE_URL}${path}`, options);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchGenres() {
  try {
    const res = await fetchData("/genre/movie/list");
    return res.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchPopularMovies() {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchMoviesByGenre(genreId) {
  try {
    const res = await fetchData(`/discover/movie`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}
