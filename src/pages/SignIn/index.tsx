import { useNavigate } from 'react-router-dom';
import { SignInWrap } from './styled';

const SignIn = () => {
	const navigate = useNavigate();
	return (
		<SignInWrap id="login-form">
			<img src="/image/logo.png" alt="logo" />
			<h1>로그인</h1>
			<div className="inputDiv">
				<label>ID</label>
				<input type="text" placeholder="아이디를 입력해 주세요" />
			</div>
			<div className="inputDiv">
				<label>PASSWORD</label>
				<input type="password" placeholder="비밀번호를 입력해 주세요" />
			</div>
			<div className="btnDiv">
				<button className="loginBtn" type="submit">
					로그인하기
				</button>
				<button className="cancleBtn" onClick={() => navigate('/')}>
					취소
				</button>
			</div>
		</SignInWrap>
	);
};

export default SignIn;
