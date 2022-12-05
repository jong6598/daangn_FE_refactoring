import { API_PATH, httpMethod } from './common';
import requester from './requester';
import { SignInResponseDTO } from '../../types/api';

export const signin = async (values: object) => {
	const {
		auth: { signin },
	} = API_PATH;

	const { payload } = await requester<SignInResponseDTO>({
		method: httpMethod.POST,
		url: `${signin}`,
		data: values,
	});

	return payload;
};

export const signup = async (values: object) => {
	const {
		auth: { signup },
	} = API_PATH;

	const { payload } = await requester<SignInResponseDTO>({
		method: httpMethod.POST,
		url: `${signup}`,
		data: values,
	});

	return payload;
};
