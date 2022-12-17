import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { getPostDetail, likePost, unlikePost, deletePost } from '../core/apis/post';

const usePostDetail = (postId: string) => {
	const navigate = useNavigate();
	const accessToken = localStorage.getItem('TOKEN');
	const loginUserName = JSON.parse(localStorage.getItem('userInfo')!).username;

	const extractPostDetail = async () => {
		const res = await getPostDetail(postId);
		return res;
	};

	const postInfo = useQuery([queryKeys.postDetail], extractPostDetail, {
		refetchOnWindowFocus: false,
	}).data;

	const toggleLike = async () => {
		if (postInfo?.isLiked === false) {
			await likePost(postId);
		} else {
			await unlikePost(postId);
		}
	};

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

	return { postInfo, toggleLike, deleteContent };
};

export default usePostDetail;
