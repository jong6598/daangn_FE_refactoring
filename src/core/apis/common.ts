export const httpMethod = {
	GET: 'GET',
	POST: 'POST',
	PATCH: 'PATCH',
	PUT: 'PUT',
	DELETE: 'DELETE',
} as const;

export const API_PATH = {
	auth: {
		signin: '/api/login',
		signup: '/api/signup',
		logout: '/api/logout',
	},
	post: {
		postlist: 'api/posts',
		post: 'api/post',
	},
} as const;
