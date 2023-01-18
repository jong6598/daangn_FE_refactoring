import React, { useEffect, ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@src/constants/queryKeys';
import { postNewPost, editPost } from '@src/core/apis/post';

type PostValue = {
	title: string;
	price: number;
	area: string;
	category: string;
	content: string;
	imageUrl: string;
};

type Props = {
	isEditingMode: boolean;
	postValue: PostValue;
	postId: string | undefined;
	setPostValue: React.Dispatch<React.SetStateAction<PostValue>>;
	setValidatePost: React.Dispatch<React.SetStateAction<boolean>>;
};

const useAddPost = ({ isEditingMode, postValue, postId, setPostValue, setValidatePost }: Props) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const onChangeInput: ComponentProps<'input'>['onChange'] = (e) => {
		setPostValue({
			...postValue,
			[e.target.name]: e.target.value,
		});
	};

	const onChangeTextArea: ComponentProps<'textarea'>['onChange'] = (e) => {
		setPostValue({
			...postValue,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (
			postValue.area !== 'ALL' &&
			postValue.category !== 'ALL' &&
			postValue.content !== '' &&
			postValue.title !== '' &&
			postValue.price !== 0
		) {
			setValidatePost(true);
		}
	}, [postValue]);

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

	return { onAdd, onChangeInput, onChangeTextArea };
};

export default useAddPost;
