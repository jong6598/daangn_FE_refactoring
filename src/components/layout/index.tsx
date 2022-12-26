import { PropsWithChildren } from 'react';

import Footer from './Footer';
import { Container } from './styled';

const Layout = (props: PropsWithChildren) => {
	return (
		<Container>
			<div className="contentDiv">{props.children}</div>
			<Footer />
		</Container>
	);
};

export default Layout;
