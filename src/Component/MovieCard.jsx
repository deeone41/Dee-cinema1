import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({ movie }) => {
  return (
    <Card className='movie-card border-0'>
      {/* Movie Poster */}
      <Card.Img src={movie.poster} alt={movie.title} className='movie-poster' />

      {/* Top-right Age Ratings Badge */}
      <Badge bg="dark" className='rating-badge'>
        {movie.rating}
      </Badge>

     <div>
        {/* Hover Overlay Content */}
        <div className="movie-overlay">
          <button className='btn-trailer'>
            <span>▶</span> Play Trailer
          </button>
  
          <h5 className='movie-title'>{movie.title}</h5>
  
          <div className='movie-meta'>
            <span>🕒 {movie.duration}</span>
            <span>|</span>
            <span className='meta-rating'>{movie.rating}</span>
          </div>
  
          <button className='btn-buy'>Buy Tickets</button>
          <a href="#details" className='btn-info'>More Info →</a>
     </div>
      </div>
    </Card>
  );
};

export default MovieCard;

