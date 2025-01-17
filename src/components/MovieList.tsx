import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  movie_info: string;
}

interface MovieListProps {
  searchQuery: string;
  movies: Movie[]; // Receive movies as a prop
}

function MovieList({ searchQuery, movies }: MovieListProps) {
  return (
    <>
      <div className="movie-cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
