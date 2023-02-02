import { useNavigate } from 'react-router-dom';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@src/constants/queryKeys';
import { getPostDetail, likePost, unlikePost, deletePost } from '@src/core/apis/post';
import UseBrowserStorage from '@src/services/BrowserStorage';
import { PostDetailData } from '@src/types/api';

const usePostDetail = (postId: string) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const browserStorage = new UseBrowserStorage();
	const accessToken = browserStorage.get('TOKEN');
	const loginUserName = browserStorage.get('userInfo').username;

	const extractPostDetail = async () => {
		const res = await getPostDetail(postId);
		return res;
	};

	const postInfo = useQuery([queryKeys.postDetail, postId], extractPostDetail).data;

	const toggleLike = async () => {
		if (postInfo?.isLiked === false) {
			await likePost(postId);
		} else {
			await unlikePost(postId);
		}
	};

	const { mutate: onToggleLike } = useMutation(toggleLike, {
		onMutate: async () => {
			const snapshotOfPreviousPostDetail = queryClient.getQueryData<PostDetailData[]>([queryKeys.postDetail, postId]);
			await queryClient.cancelQueries([queryKeys.postDetail]);
			queryClient.setQueryData([queryKeys.postDetail, postId], () => {
				return {
					...postInfo,
					isLiked: !postInfo?.isLiked,
				};
			});
			return { snapshotOfPreviousPostDetail };
		},
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.postDetail], {
				refetchType: 'all',
			});
			queryClient.invalidateQueries([queryKeys.postList], { refetchType: 'all' });
		},
		onError: (error, variables, context) => {
			queryClient.setQueryData([queryKeys.postDetail, postId], () => {
				return { ...context?.snapshotOfPreviousPostDetail };
			});
		},
	});

	const deleteContent = async () => {
		const result = window.confirm('게시글을 삭제하시겠습니까?');
		if (result) {
			if (accessToken !== null && postInfo?.nickname === loginUserName) {
				await deletePost(postId);
				return navigate('/home');
			} else {
				alert('권한이 없습니다!');
				return navigate('/login');
			}
		}
	};

	const { mutate: onDelete } = useMutation(deleteContent, {
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.postList], {
				refetchType: 'all',
			});
			return navigate('/home');
		},
		onError: () => {
			throw new Error('게시물 상세정보 조회 실패');
		},
	});

	return { postInfo, onToggleLike, onDelete };
};

export default usePostDetail;
