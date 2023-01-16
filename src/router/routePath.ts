export const PRIVATE_ROUTE_PATH = {
	POSTLIST: '/home',
	MYPAGE: '/mypage',
	ADDPOST: '/addpost',
	EDITPOST: '/post/:postId/edit',
	POSTDETAIL: '/post/:postId',
	NOT_FOUND: '*',
} as const;

export const PUBLIC_ROUTE_PATH = {
	INTRO: '/',
	SIGNUP: '/signup',
	SIGNIN: '/signin',
} as const;
