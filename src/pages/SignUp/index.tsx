import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpWrap, InputBox, Error, BtnContainer } from './styled';

const SignUp = () => {
	const idRef = useRef<HTMLInputElement>(null);
	const nickNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	return (
		<SignUpWrap>
			<img src="/image/logo.png" alt="logo" />
			<h1>회원가입</h1>
			<form>
				<InputBox>
					<label>ID</label>
					<input type="text" placeholder="아이디를 입력해 주세요 (4자 이상)" ref={idRef} />
					{!idRef.current?.value && <Error>* 아이디는 필수값 입니다. </Error>}
					{idRef.current?.value && idRef.current?.value.length < 4 && <Error>* 아이디는 4자 이상입니다</Error>}
				</InputBox>
				<InputBox>
					<label>NICKNAME</label>
					<input type="text" placeholder="닉네임을 입력해 주세요 (10자 이하)" ref={nickNameRef} />
					{!nickNameRef.current?.value && <Error>* 닉네임은 필수값 입니다. </Error>}
					{nickNameRef.current?.value && nickNameRef.current?.value.length > 10 && <Error>* 닉네임은 10자 이하입니다</Error>}
				</InputBox>
				<InputBox>
					<label>PASSWORD</label>
					<input type="password" placeholder="비밀번호를 입력해 주세요 (6자 이상)" ref={passwordRef} />
					{!passwordRef.current?.value && <Error>* 비밀번호는 필수값 입니다. </Error>}
					{passwordRef.current?.value && passwordRef.current?.value.length < 6 && <Error>* 비밀번호는 6자 이하입니다</Error>}
				</InputBox>
				<InputBox>
					<label>PASSWORD CONFIRMATION</label>
					<input type="password" placeholder="비밀번호를 확인해주세요" ref={passwordCheckRef} />
					{passwordCheckRef.current?.value !== passwordRef.current?.value && <Error>비밀번호가 일치하지 않습니다.</Error>}
				</InputBox>
				<BtnContainer>
					<button className="joinBtn" type="submit">
						가입하기
					</button>
					<button className="cancleBtn" onClick={() => navigate('/')}>
						취소
					</button>
				</BtnContainer>
			</form>
		</SignUpWrap>
	);
};

export default SignUp;
