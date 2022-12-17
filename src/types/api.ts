export type SingUpResponseDto = {
	response: boolean;
	message: string;
};

export type SignInResponseDto = {
	response: boolean;
	token: string;
	userId: number;
	username: string;
	nickname: string;
};

export type PostContentDto = [
	{
		id: number;
		price: number;
		area: string;
		imageUrl: string;
		category: string;
		after: number;
		likeCount: number;
	},
];

export type PostListResponseDto = {
	list: {
		content: PostContentDto;
	};
	pageable: Pageable;
};

export type Pageable = {
	totalPages: number;
	totalElemets: string;
	last: boolean;
	size: number;
	empty: boolean;
};

export type EditPostRespnseDto = {
	resonse: boolean;
	message: string;
};

export type LikeRespnseDto = {
	resonse: boolean;
	message: string;
};

export type PostDetailResponseDto = {
	post: PostDetailData;
};

export type PostDetailData = {
	id: number;
	title: string;
	category: string;
	price: number;
	area: string;
	content: string;
	imageUrl: string;
	state: string;
	after: string;
	likeCount: number;
	userId: number;
	nickname: string;
	isLiked: boolean;
};
