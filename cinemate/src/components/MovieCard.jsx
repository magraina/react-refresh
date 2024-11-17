import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const jumpToMovieDetailPage = () => {
    navigate('/movie/' + movie.id);
  }
  return (
	<div className='max-w-md border border-gray-700 rounded-lg hover:bg-gray-700 hover:cursor-pointer' onClick={jumpToMovieDetailPage}>
    <img className='rounded-t-lg object-cover w-full' src={ 'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title} />
    <h2 className='font-bold text-xl text-left m-4 mb-2'>{movie.title}</h2>
    { movie.overview && movie.overview.length > 300 ?
    <p className='text-sm text-left text-gray-500 mx-4 mb-4'>{movie.overview.slice(0, 300) + '...'}</p> :
    <p className='text-sm text-left text-gray-500 mx-4 mb-4'>{movie.overview}</p>
    }
  </div>
  )
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  })
}

export default MovieCard