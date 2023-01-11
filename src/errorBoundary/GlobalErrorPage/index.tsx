import { ErrorBoundaryWrap } from './styled';

const GlobalErrorPage = () => {
	return (
		<ErrorBoundaryWrap>
			<p>에러가 발생했어요.</p>
			<a href="/home">메인으로 이동</a>
		</ErrorBoundaryWrap>
	);
};

export default GlobalErrorPage;
