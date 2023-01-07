import { Component, ElementType, ErrorInfo, ReactNode } from 'react';

import AuthErrorPage from '@src/errorBoundary/AuthErrorPage';

interface Props {
	fallback: ElementType;
	children?: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

const initialState: State = {
	hasError: false,
	error: null,
};

class GlobalErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = initialState;
	}

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(error);
		console.log('errorInfo', errorInfo);
	}

	public render() {
		const { hasError, error } = this.state;
		const { children } = this.props;
		if (error?.message === 'Request failed with status code 401') {
			return <AuthErrorPage />;
		} else if (hasError) {
			return <this.props.fallback />;
		}
		return children;
	}
}

export default GlobalErrorBoundary;
