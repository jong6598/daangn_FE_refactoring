import { useNavigate } from 'react-router-dom';

import { Logo } from '@src/assets/image';
import { signup } from '@src/core/apis/auth';
import useForm from '@src/hooks/useForm';
import validateSign from '@src/utils/validateSign';

import { SignUpWrap, InputBox, Error, BtnContainer } from './styled';

const SignUp = () => {
	const navigate = useNavigate();
	const { values, errors, handleChange, handleSubmit } = useForm({
		initialValues: { username: '', password: '', nickname: '', confirmPassword: '' },
		onSubmit: async (values: object) => {
			await signup(values);
			alert('회원가입 완료! 로그인 페이지로 이동합니다.');
			navigate('/signin');
		},
		validateSign,
	});

	return (
		<SignUpWrap>
			<img src={Logo} alt="logo" />
			<h1>회원가입</h1>
			<form onSubmit={handleSubmit}>
				<InputBox>
					<label>ID</label>
					<input
						type="text"
						name="username"
						value={values.username}
						onChange={handleChange}
						placeholder="아이디를 입력해 주세요 (4자 이상)"
					/>
					{errors.username && <Error>{errors.username} </Error>}
				</InputBox>
				<InputBox>
					<label>NICKNAME</label>
					<input
						type="text"
						name="nickname"
						value={values.nickname}
						placeholder="닉네임을 입력해 주세요 (10자 이하)"
						onChange={handleChange}
					/>
					{errors.nickname && <Error>{errors.nickname}</Error>}
				</InputBox>
				<InputBox>
					<label>PASSWORD</label>
					<input
						type="password"
						name="password"
						value={values.password}
						placeholder="비밀번호를 입력해 주세요 (6자 이상)"
						onChange={handleChange}
					/>
					{errors.password && <Error>{errors.password}</Error>}
				</InputBox>
				<InputBox>
					<label>PASSWORD CONFIRMATION</label>
					<input
						type="password"
						name="confirmPassword"
						value={values.confirmPassword}
						placeholder="비밀번호를 확인해주세요"
						onChange={handleChange}
					/>
					{values.confirmPassword !== values.password && <Error>비밀번호가 일치하지 않습니다.</Error>}
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
