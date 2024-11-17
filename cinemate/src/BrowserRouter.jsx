import { createBrowserRouter } from "react-router-dom";
import AppLayout from './AppLayout';
import MovieList from './components/MovieList';
import { moviesByCategory, movieDetails, searchMovies } from './components/fetch-movie-data';
import MovieDetail from './components/MovieDetail';
import NotFound from './components/NotFound';

const BrowserRouter = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <MovieList />,
				loader: moviesByCategory,
			},
			{
				path: "/category/:category",
				element: <MovieList />,
				loader: moviesByCategory,

			},
			{
				path: "/search",
				element: <MovieList />,
				loader: searchMovies,
			},
			{
				path: "/movie/:id",
				element: <MovieDetail />,
				loader: movieDetails,
			},
			{
				path: '*',
				element: <NotFound />,
			}
		]
	},
	
]);

export default BrowserRouter;