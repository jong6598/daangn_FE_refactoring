import requester from './requester';
import { API_PATH, httpMethod } from './common';
import { PostListResponseDto } from '../../types/api';

export const getPostList = async (category: string, area: string, pageParam: number) => {
	const {
		post: { postlist },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${postlist}?category=${category}&area=${area}&page=${pageParam}&size=6`,
	});

	return payload;
};

export const getPostListByKeyword = async (search: string, pageParam: number) => {
	const {
		post: { postlist },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${postlist}/search?keyword=${search}&page=${pageParam}&size=6`,
	});

	return payload;
};
