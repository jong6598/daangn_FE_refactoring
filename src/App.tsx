import { Suspense } from 'react';

import GlobalErrorBoundary from '@src/errorBoundary/ErrorBoundary';
import ErrorPage from '@src/errorBoundary/GlobalErrorPage';
import Router from '@src/router/index';

const App = () => {
	return (
		<GlobalErrorBoundary fallback={ErrorPage}>
			<Suspense fallback={<div>로딩중...</div>}>
				<Router />
			</Suspense>
		</GlobalErrorBoundary>
	);
};
export default App;
