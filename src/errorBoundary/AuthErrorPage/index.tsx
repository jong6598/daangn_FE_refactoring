import { ErrorBoundaryWrap } from './styled';

const AuthErrorPage = () => {
	return (
		<ErrorBoundaryWrap>
			<p>로그인 상태가 아닙니다</p>
			<a href="/signin">로그인하기</a>
		</ErrorBoundaryWrap>
	);
};

export default AuthErrorPage;
