import { Routes, Route } from 'react-router';

import { SignIn, Intro, SignUp, PostList, Mypage, AddPost, PostDetail } from '@src/pages';
import { isValidArray } from '@src/utils/ArrayUtils';

import { ROUTE_PATH } from './routePath';

const routes = [
	{ id: 1, path: ROUTE_PATH.INTRO, element: <Intro /> },
	{ id: 2, path: ROUTE_PATH.SIGNUP, element: <SignUp /> },
	{ id: 3, path: ROUTE_PATH.SIGNIN, element: <SignIn /> },
	{ id: 4, path: ROUTE_PATH.POSTLIST, element: <PostList /> },
	{ id: 5, path: ROUTE_PATH.MYPAGE, element: <Mypage /> },
	{ id: 6, path: ROUTE_PATH.ADDPOST, element: <AddPost /> },
	{ id: 7, path: ROUTE_PATH.EDITPOST, element: <AddPost /> },
	{ id: 8, path: ROUTE_PATH.POSTDETAIL, element: <PostDetail /> },
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
