import { useEffect } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { lightBlue } from "@mui/material/colors";

const btnBg = lightBlue[50];

interface Movie {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    movie_info: string;
  };
}

function MovieCard(props: Movie) {
  const movie = props.movie;

  return (
    <>
      <div key={movie.id} className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info text-white py-8">
          <h3>{movie.title}</h3>
          <span>{movie.vote_average}</span>
          <p className="movie-info">{movie.movie_info}</p>
        </div>
        <div className="movie-card__overlay pb-8">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#fafafa", color: "#232423" }}
            className="bg-slate-50 text-slate-700"
          >
            <FavoriteIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
