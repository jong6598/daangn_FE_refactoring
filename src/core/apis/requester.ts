import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import UseBrowserStorage from '@src/services/BrowserStorage';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: import.meta.env.VITE_BASE_API_URL,
	});

	return base;
};

const axiosInstance = createAxiosInstance();

export default async function requester<Payload>(option: AxiosRequestConfig) {
	const browserStorage = new UseBrowserStorage();
	const accessToken = browserStorage.get('TOKEN');
	const response: AxiosResponse<Payload> = await axiosInstance(
		accessToken
			? {
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'content-type': 'application/json;charset=UTF-8',
						accept: 'application/json,',
					},
					...option,
			  }
			: {
					headers: {
						'content-type': 'application/json;charset=UTF-8',
						accept: 'application/json,',
					},
					...option,
			  },
	);

	return {
		status: response.status,
		headers: response.headers,
		payload: response.data,
	};
}
