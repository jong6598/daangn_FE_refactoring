export const ROUTE_PATH = {
	INTRO: '/',
	SIGNUP: '/signup',
	SIGNIN: '/signin',
	POSTLIST: '/home',
	MYPAGE: '/mypage',
	ADDPOST: '/addpost',
	EDITPOST: '/post/:postId/edit',
	POSTDETAIL: '/post/:postId',
	NOT_FOUND: '*',
} as const;
