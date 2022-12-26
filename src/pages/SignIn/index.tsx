import { useNavigate } from 'react-router-dom';

import { Logo } from '@src/assets/image';
import { signin } from '@src/core/apis/auth';
import useForm from '@src/hooks/useForm';
import validateSign from '@src/utils/validateSign';

import { SignInWrap, Error } from './styled';

const SignIn = () => {
	const navigate = useNavigate();
	const { values, errors, handleChange, handleSubmit } = useForm({
		initialValues: { username: '', password: '' },
		onSubmit: async (values: object) => {
			const payload = await signin(values);
			localStorage.setItem('TOKEN', payload.token);
			localStorage.setItem(
				'userInfo',
				JSON.stringify({ userId: payload.userId, username: payload.username, nickname: payload.username }),
			);
			navigate('/home');
		},
		validateSign,
	});

	return (
		<SignInWrap onSubmit={handleSubmit}>
			<img src={Logo} alt="logo" />
			<h1>로그인</h1>
			<div className="inputDiv">
				<label>ID</label>
				<input type="text" name="username" value={values.username} onChange={handleChange} placeholder="아이디를 입력해 주세요" />
				{errors.username && <Error>{errors.username}</Error>}
			</div>
			<div className="inputDiv">
				<label>PASSWORD</label>
				<input
					type="password"
					name="password"
					value={values.password}
					onChange={handleChange}
					placeholder="비밀번호를 입력해 주세요"
				/>
				{errors.password && <Error>{errors.password}</Error>}
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
