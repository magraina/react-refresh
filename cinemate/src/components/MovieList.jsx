import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const MovieList = () => {
	const params = useParams();
	const [searchParams] = useSearchParams();
	
  return (
	<div>MovieList</div>
  )
};

export default MovieList;