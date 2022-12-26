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
		title: string;
		after: string;
		likeCount: number;
	},
];

export type PostListResponseDto = {
	list: {
		content: PostContentDto;
		empty: boolean;
		first: boolean;
		last: boolean;
		number: 0;
		numberOfElements: number;
		pegeable: {
			offset: number;
			pageNumber: number;
			pageSize: number;
			paged: boolean;
			sort: {
				empty: boolean;
				sorted: boolean;
				unsorted: boolean;
			};
			unpaged: boolean;
		};
		size: number;
		sort: {
			empty: boolean;
			sorted: boolean;
			unsorted: boolean;
		};
	};
	response: boolean;
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

export type DeletePostResponseDto = {
	resonse: boolean;
	message: string;
};
