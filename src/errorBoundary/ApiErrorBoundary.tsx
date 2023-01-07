import { ElementType, ReactNode, Component } from 'react';

import { AxiosError } from 'axios';

interface Props {
	fallback: ElementType;
	children?: ReactNode;
	onReset?: () => void;
}

interface State {
	shouldHandleError: boolean;
	shouldRethrow: boolean;
	error: Error | AxiosError | null;
}

const initialState: State = {
	shouldHandleError: false,
	shouldRethrow: false,
	error: null,
};

class ApiErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = initialState;
	}

	public static getDerivedStateFromError(error: Error | AxiosError): State {
		if (error instanceof AxiosError) {
			if (error.response?.status === 401) {
				return {
					shouldHandleError: false,
					shouldRethrow: true,
					error,
				};
			}
		}
		return { shouldHandleError: true, shouldRethrow: false, error };
	}

	componentDidCatch(error: Error): void {
		console.log(error, 'api에러바운더리');
	}

	onResetErrorBoundary = () => {
		const { onReset } = this.props;
		onReset == null ? void 0 : onReset();
		this.reset();
	};

	reset() {
		this.setState(initialState);
	}

	public render() {
		const { shouldHandleError, shouldRethrow, error } = this.state;
		const { children } = this.props;

		if (shouldRethrow) {
			throw error;
		}
		if (!shouldHandleError) {
			return children;
		}
		return <this.props.fallback onReset={this.onResetErrorBoundary} onRefresh={this.reset} />;
	}
}

export default ApiErrorBoundary;
