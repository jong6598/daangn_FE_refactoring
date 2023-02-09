import { Suspense } from 'react';

import { Loader } from '@src/components';
import GlobalErrorBoundary from '@src/errorBoundary/ErrorBoundary';
import GlobalErrorPage from '@src/errorBoundary/GlobalErrorPage';
import Router from '@src/router/index';

const App = () => {
	return (
		<GlobalErrorBoundary fallback={GlobalErrorPage}>
			<Suspense fallback={<Loader />}>
				<Router />
			</Suspense>
		</GlobalErrorBoundary>
	);
};
export default App;
