import { createBrowserRouter } from "react-router-dom";
import AppLayout from './AppLayout';
import MovieList from './components/MovieList';

const BrowserRouter = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <MovieList />,
			},
			{
				path: "/:category",
				element: <MovieList />,
			},
			{
				path: '*',
				element: <MovieList />,
			}
		]
	},
	
]);

export default BrowserRouter;