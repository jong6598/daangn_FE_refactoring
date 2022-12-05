export const httpMethod = {
	GET: 'GET',
	POST: 'POST',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
} as const;

export const API_PATH = {
	auth: {
		signin: '/api/login',
		signup: '/api/signup',
	},
} as const;