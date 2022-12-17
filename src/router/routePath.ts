export const ROUTE_PATH = {
	INTRO: '/',
	SIGNUP: '/signup',
	SIGNIN: '/signin',
	POSTLIST: '/home',
	MYPAGE: '/mypage',
	ADDPOST: '/addpost',
	EDITPOST: '/post/:postId/edit',
	POSTDETAIL: '/postdetail',
	//FIXME: api 500에러 해결시 라우팅할 detailpage PATH
	// POSTDETAIL: '/post/:postId',
	NOT_FOUND: '*',
} as const;
