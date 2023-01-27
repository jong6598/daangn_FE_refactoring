import { LoaderWrap } from './styled';

const Loader = () => {
	return (
		<LoaderWrap>
			<div className="loading_spinner" />
			<p>로딩중입니다...</p>
		</LoaderWrap>
	);
};
export default Loader;
