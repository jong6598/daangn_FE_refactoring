import { Routes, Route } from 'react-router';
import { isValidArray } from '../utils/ArrayUtils';
import SignUp from '../pages/SignUp';
import { ROUTE_PATH } from './routePath';
import SignIn from '../pages/SignIn';

const routes = [
	{ id: 1, path: ROUTE_PATH.SIGNUP, element: <SignUp /> },
	{ id: 2, path: ROUTE_PATH.SIGNIN, element: <SignIn /> },
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
