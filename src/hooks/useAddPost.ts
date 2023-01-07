import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@src/constants/queryKeys';
import { postNewPost, editPost } from '@src/core/apis/post';

type Props = {
	isEditingMode: boolean;
	postValue: object;
	postId: string | undefined;
};

const useAddPost = ({ isEditingMode, postValue, postId }: Props) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const addPost = async () => {
		if (isEditingMode) {
			const data = await editPost(postValue, postId!);
			alert('게시글이 수정되었습니다');
			return data;
		} else {
			const data = await postNewPost(postValue);
			alert('게시글이 등록되었습니다');
			return data;
		}
	};

	const { mutate: onAdd } = useMutation(addPost, {
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.postList], { refetchType: 'all' });
			queryClient.invalidateQueries([queryKeys.postDetail], { refetchType: 'all' });
			if (isEditingMode) {
				navigate(`/post/${postId}`);
			} else {
				navigate(`/home`);
			}
		},
		onError: () => {
			throw new Error('게시물 등록실패');
		},
	});

	return onAdd;
};

export default useAddPost;
