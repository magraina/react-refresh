import { useLoaderData } from 'react-router-dom';

const MovieDetail = () => {
	const movieData = useLoaderData();

	console.log(movieData);
  return (
	<div className='flex flex-col md:flex-row items-center gap-5 p-10 font-normal'>
		<img className='object-cover max-w-md' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
		<div className='text-left pl-20 flex flex-col gap-5'>
			<h1 className='text-3xl font-bold'>{movieData.title}</h1>
			<p className='text-gray-400'>{movieData.overview}
				<br />
				<a className='text-amber-600' href={`https://www.imdb.com/title/${movieData.imdb_id}`} target='_blank' rel='noreferrer'>Read more on IMDB</a>
			</p>
			<div>
			{ movieData.genres.map((genre) => (
				<span key={genre.id} className=' p-1 border border-gray-500 mr-4 rounded-md'>{genre.name}</span>
			))}
			</div>
			<p>⭐ {movieData.vote_average} - {movieData.vote_count} reviews</p>
			<p><span className='font-bold'>Runtime:</span> {movieData.runtime} minutes</p>
			<p><span className='font-bold'>Budget:</span> ${movieData.budget}</p>
			<p><span className='font-bold'>Revenue:</span> ${movieData.revenue}</p>
			<p><span className='font-bold'>Release Date:</span> {movieData.release_date}</p>
			<p><span className='font-bold'>IMDB Code:</span> {movieData.imdb_id}</p>
		</div>
	</div>
  )
}

export default MovieDetail