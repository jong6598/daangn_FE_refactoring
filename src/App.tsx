import { Suspense } from 'react';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ApiErrorBoundary from '@src/errorBoundary/ApiErrorBoundary';
import ApiErrorPage from '@src/errorBoundary/ApiErrorPage';
import GlobalErrorBoundary from '@src/errorBoundary/ErrorBoundary';
import ErrorPage from '@src/errorBoundary/GlobalErrorPage';
import Router from '@src/router/index';

const App = () => {
	const { reset } = useQueryErrorResetBoundary();

	return (
		<GlobalErrorBoundary fallback={ErrorPage}>
			<QueryErrorResetBoundary>
				<Suspense fallback={<div>로딩중...</div>}>
					<ApiErrorBoundary onReset={reset} fallback={ApiErrorPage}>
						<Router />
					</ApiErrorBoundary>
				</Suspense>
			</QueryErrorResetBoundary>
		</GlobalErrorBoundary>
	);
};
export default App;
