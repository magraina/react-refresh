const searchMovies = async ({ request }) => {
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get("q");
	const searchParams = new URLSearchParams({
		api_key: import.meta.env.VITE_MOVIEDB_API_KEY,
		query: searchTerm,
	});

	const movieSearchApiUrl = new URL('https://api.themoviedb.org/3/search/movie');
	movieSearchApiUrl.search = searchParams.toString();

	return fetch(movieSearchApiUrl);
};

const paramsCategoryMapping = {
	popular: 'popular',
	'top-rated': 'top_rated',
	default: 'now_playing',
	upcoming: 'upcoming',
};

const moviesByCategory = ({ params }) => {
	let category = paramsCategoryMapping.default;

	if (params && params.category) {
		category = paramsCategoryMapping[params.category] ?? category;
	}

	const searchParams = new URLSearchParams({
		api_key: import.meta.env.VITE_MOVIEDB_API_KEY,
	});

	const movieCategoryApiUrl = new URL(`https://api.themoviedb.org/3/movie/${category}`);
	movieCategoryApiUrl.search = searchParams.toString();

	return fetch(movieCategoryApiUrl);
};

const movieDetails = async ({ params }) => {
	const searchParams = new URLSearchParams({
		api_key: import.meta.env.VITE_MOVIEDB_API_KEY,
	});

	const movieDetailsApiUrl = new URL(`https://api.themoviedb.org/3/movie/${params.id}`);
	movieDetailsApiUrl.search = searchParams.toString();

	return fetch(movieDetailsApiUrl);
}

export { searchMovies, moviesByCategory, movieDetails };