import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

const MovieInterface = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch popular movies");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = async () => {
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch search results");
    }
  };

  return (
    <>
      <SearchForm
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MovieList searchQuery={searchQuery} movies={movies} />
    </>
  );
};

export default MovieInterface;
