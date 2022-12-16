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

export const extractPostListByKeyword = async (search: string, pageParam: number) => {
	const {
		post: { postlist },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${postlist}/search?keyword=${search}&page=${pageParam}&size=6`,
	});

	return payload;
};

export const postNewPost = async (postValue: object) => {
	const {
		post: { post },
	} = API_PATH;

	const { payload } = await requester({
		method: httpMethod.POST,
		url: `${post}`,
		data: postValue,
	});

	return payload;
};

export const editPost = async (postValue: object, postId: string) => {
	const {
		post: { post },
	} = API_PATH;

	const { payload } = await requester({
		method: httpMethod.PUT,
		url: `${post}/${postId}`,
		data: postValue,
	});

	return payload;
};
