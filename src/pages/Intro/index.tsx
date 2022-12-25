import { useNavigate } from 'react-router-dom';

import { IntroWrap } from './styled';

const Intro = () => {
	const navigater = useNavigate();

	return (
		<IntroWrap>
			<div className="discriptionDiv">
				<div>
					<p className="bold">당신 근처의 </p>
					<p className="bold">당근마켓</p>
					<p>내 동네를 설정하고</p>
					<p>당근마켓을 시작해보세요.</p>
				</div>
				<img src="/src/assets/image/daangnHome.png" alt="logo" />
			</div>
			<button className="joinBtn" onClick={() => navigater('/signup')}>
				시작하기
			</button>
			<div className="loginBox">
				<img src="/src/assets/image/logo.png" alt="logo" />
				<p>이미 계정이 있나요?</p>
				<button onClick={() => navigater('/signin')}>로그인</button>
			</div>
		</IntroWrap>
	);
};

export default Intro;
