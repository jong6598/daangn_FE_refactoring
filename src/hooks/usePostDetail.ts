import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { getPostDetail, likePost, unlikePost, deletePost } from '../core/apis/post';

const usePostDetail = (postId: string) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const accessToken = localStorage.getItem('TOKEN');
	const loginUserName = JSON.parse(localStorage.getItem('userInfo')!).username;

	const extractPostDetail = async () => {
		const res = await getPostDetail(postId);
		return res;
	};

	const postInfo = useQuery([queryKeys.postDetail, postId], extractPostDetail, {
		refetchOnWindowFocus: false,
	}).data;

	const toggleLike = async () => {
		if (postInfo?.isLiked === false) {
			await likePost(postId);
		} else {
			await unlikePost(postId);
		}
	};

	const { mutate: onToggleLike } = useMutation(toggleLike, {
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.postDetail], {
				refetchType: 'all',
			});
			queryClient.invalidateQueries([queryKeys.postList], { refetchType: 'all' });
		},
		onError: () => {},
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
		onError: () => {},
	});

	return { postInfo, onToggleLike, onDelete };
};

export default usePostDetail;
