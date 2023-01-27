import React from 'react';
import { Routes, Route } from 'react-router';

import PrivateRoute from '@src/router/PrivateRoute';
import { isValidArray } from '@src/utils/ArrayUtils';

import { PRIVATE_ROUTE_PATH, PUBLIC_ROUTE_PATH } from './routePath';

const SignIn = React.lazy(() => import('@src/pages/SignIn'));
const Intro = React.lazy(() => import('@src/pages/Intro'));
const SignUp = React.lazy(() => import('@src/pages/SignUp'));
const PostListPage = React.lazy(() => import('@src/pages/PostListPage'));
const Mypage = React.lazy(() => import('@src/pages/Mypage'));
const AddPost = React.lazy(() => import('@src/pages/AddPost'));
const PostDetail = React.lazy(() => import('@src/pages/PostDetail'));

const privateRoutes = [
	{ id: 1, path: PRIVATE_ROUTE_PATH.POSTLIST, element: <PostListPage /> },
	{ id: 2, path: PRIVATE_ROUTE_PATH.MYPAGE, element: <Mypage /> },
	{ id: 3, path: PRIVATE_ROUTE_PATH.ADDPOST, element: <AddPost /> },
	{ id: 4, path: PRIVATE_ROUTE_PATH.EDITPOST, element: <AddPost /> },
	{ id: 5, path: PRIVATE_ROUTE_PATH.POSTDETAIL, element: <PostDetail /> },
];

const publicRoutes = [
	{ id: 1, path: PUBLIC_ROUTE_PATH.INTRO, element: <Intro /> },
	{ id: 2, path: PUBLIC_ROUTE_PATH.SIGNUP, element: <SignUp /> },
	{ id: 3, path: PUBLIC_ROUTE_PATH.SIGNIN, element: <SignIn /> },
];

const Router = () => {
	return (
		<Routes>
			<Route element={<PrivateRoute authentication={true} />}>
				{isValidArray(privateRoutes) &&
					privateRoutes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
			</Route>
			<Route element={<PrivateRoute authentication={false} />}>
				{isValidArray(publicRoutes) &&
					publicRoutes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
			</Route>
		</Routes>
	);
};

export default Router;
