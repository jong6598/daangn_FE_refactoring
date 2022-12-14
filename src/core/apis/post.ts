import { API_PATH, httpMethod } from '@src/core/apis/common';
import requester from '@src/core/apis/requester';
import {
	PostListResponseDto,
	EditPostRespnseDto,
	LikeRespnseDto,
	PostDetailResponseDto,
	DeletePostResponseDto,
} from '@src/types/api';

export const fetchPostList = async (category: string, area: string, pageParam: number) => {
	const {
		post: { postlist },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${postlist}?category=${category}&area=${area}&page=${pageParam}&size=6`,
	});

	return payload;
};

export const extractPostListByKeyword = async (searchKeyword: string, pageParam: number) => {
	const {
		post: { postlist },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${postlist}/search?keyword=${searchKeyword}&page=${pageParam}&size=6`,
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

	const { payload } = await requester<EditPostRespnseDto>({
		method: httpMethod.PUT,
		url: `${post}/${postId}`,
		data: postValue,
	});

	return payload;
};

export const getPostDetail = async (postId: string) => {
	const {
		post: { post },
	} = API_PATH;

	const { payload } = await requester<PostDetailResponseDto>({
		method: httpMethod.GET,
		url: `${post}/${postId}`,
	});

	return payload.post;
};

export const likePost = async (postId: string) => {
	const {
		post: { like },
	} = API_PATH;

	const { payload } = await requester<LikeRespnseDto>({
		method: httpMethod.POST,
		url: `${like}/${postId}`,
	});

	return payload;
};

export const unlikePost = async (postId: string) => {
	const {
		post: { like },
	} = API_PATH;

	const { payload } = await requester<LikeRespnseDto>({
		method: httpMethod.DELETE,
		url: `${like}/${postId}`,
	});

	return payload;
};

export const deletePost = async (postId: string) => {
	const {
		post: { post },
	} = API_PATH;

	const { payload } = await requester<DeletePostResponseDto>({
		method: httpMethod.DELETE,
		url: `${post}/${postId}`,
	});

	return payload;
};

export const fetchMyPostList = async (filter: string, pageParam: number) => {
	const {
		post: { mypost },
	} = API_PATH;

	const { payload } = await requester<PostListResponseDto>({
		method: httpMethod.GET,
		url: `${mypost}?filter=${filter}&page=${pageParam}&size=6`,
	});

	return payload;
};
