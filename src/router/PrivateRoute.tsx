import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PRIVATE_ROUTE_PATH, PUBLIC_ROUTE_PATH } from '@src/router/routePath';

interface PrivateRouteProps {
	children?: ReactElement;
	authentication: boolean;
}

const PrivateRoute = ({ authentication }: PrivateRouteProps): React.ReactElement | null => {
	const isAuthenticated = localStorage.getItem('TOKEN');

	if (authentication) {
		return isAuthenticated ? <Outlet /> : <Navigate to={PUBLIC_ROUTE_PATH.SIGNIN} />;
	} else {
		return !isAuthenticated ? <Outlet /> : <Navigate to={PRIVATE_ROUTE_PATH.POSTLIST} />;
	}
};

export default PrivateRoute;
