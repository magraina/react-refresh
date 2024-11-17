import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = () => {
	const movieData = useLoaderData();
	
  return (
	<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  p-5'>
		{movieData.results.map((movie) => (
			<MovieCard key={movie.id} movie={movie} />
		))}
	</div>
  )
};

export default MovieList;