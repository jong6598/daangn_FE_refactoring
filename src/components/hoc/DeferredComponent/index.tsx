import { ComponentType, PropsWithChildren, useEffect, useState } from 'react';

const withDeferred = <P extends object>(WrappedComponent: ComponentType<P>) => {
	const DeferredComponent = (props: PropsWithChildren<P>) => {
		const [isDeferred, setIsDeferred] = useState(false);

		useEffect(() => {
			const timeoutId = setTimeout(() => {
				setIsDeferred(true);
			}, 200);
			return () => clearTimeout(timeoutId);
		}, []);

		if (!isDeferred) {
			return null;
		}

		return <WrappedComponent {...props} />;
	};

	return DeferredComponent;
};

export default withDeferred;
