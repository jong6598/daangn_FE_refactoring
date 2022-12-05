type Props = {
	username: string;
	password: string;
	nickname?: string;
	confirmPassword?: string;
};

const validateSign = ({ username, password, nickname, confirmPassword }: Props) => {
	const errors = {
		username: '',
		password: '',
		nickname: '',
		confirmPassword: '',
	};

	if (username === '') {
		errors.username = '아이디가 입력되지 않았습니다.';
	} else if (username.length < 3) {
		errors.username = '4자 이상의 아이디를 사용해주세요.';
	}

	if (password === '') {
		errors.password = '비밀번호가 입력되지 않았습니다.';
	} else if (password.length <= 4) {
		errors.password = '6자 이상의 패스워드를 사용해주세요.';
	}

	if (nickname === '') {
		errors.nickname = '닉네임이 입력되지 않았습니다.';
	} else if (nickname !== undefined && nickname.length > 10) {
		errors.nickname = '10자 이하의 닉네임을 사용해주세요.';
	}

	if (confirmPassword === '') {
		errors.confirmPassword = '비밀번호를 확인해주세요.';
	} else if (confirmPassword !== password) {
		errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
	}

	return errors;
};

export default validateSign;
