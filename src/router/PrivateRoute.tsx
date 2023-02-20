import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { storage } from '@src/constants/storage';
import { PRIVATE_ROUTE_PATH, PUBLIC_ROUTE_PATH } from '@src/router/routePath';
import BrowserStorageModule from '@src/services/BrowserStorageModule';

interface PrivateRouteProps {
	children?: ReactElement;
	authentication: boolean;
}

const PrivateRoute = ({ authentication }: PrivateRouteProps): React.ReactElement | null => {
	const browserStorage = new BrowserStorageModule(storage);
	const isAuthenticated = browserStorage.get('TOKEN');

	if (authentication) {
		return isAuthenticated ? <Outlet /> : <Navigate to={PUBLIC_ROUTE_PATH.SIGNIN} />;
	} else {
		return !isAuthenticated ? <Outlet /> : <Navigate to={PRIVATE_ROUTE_PATH.POSTLIST} />;
	}
};

export default PrivateRoute;
