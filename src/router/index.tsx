import { Routes, Route } from 'react-router';
import { isValidArray } from '../utils/ArrayUtils';
import { ROUTE_PATH } from './routePath';
import SignIn from '../pages/SignIn';
import Intro from '../pages/Intro';
import SignUp from '../pages/SignUp';
import PostList from '../pages/PostList';

const routes = [
	{ id: 1, path: ROUTE_PATH.INTRO, element: <Intro /> },
	{ id: 2, path: ROUTE_PATH.SIGNUP, element: <SignUp /> },
	{ id: 3, path: ROUTE_PATH.SIGNIN, element: <SignIn /> },
	{ id: 4, path: ROUTE_PATH.POSTLIST, element: <PostList /> },
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
