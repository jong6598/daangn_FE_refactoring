export type SignInResponseDTO = {
	token: string;
	userId: string;
	username: string;
	nickname: string;
};

export type PostListResponseDto = {
	last: number;
	list: {
		content: {};
	};
};
