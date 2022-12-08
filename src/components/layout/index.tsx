import { PropsWithChildren } from 'react';
import { Container } from './styled';
import Footer from './Footer';

const Layout = (props: PropsWithChildren) => {
	return (
		<Container>
			<div className="contentDiv">{props.children}</div>
			<Footer />
		</Container>
	);
};

export default Layout;
