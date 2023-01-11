import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import PostListItem from '@src/components/feature/PostListItem';
import SkeletonPostList from '@src/components/feature/Skeleton/SkeletonPostList';
import usePostList from '@src/hooks/usePostList';
import { PostDetailData } from '@src/types/api';

import { PostListWrap } from './styled';

type Props = {
	postFilterObj: { area: string; category: string };
	searchKeyword: string;
};

const PostList = ({ postFilterObj, searchKeyword }: Props) => {
	const { ref, inView } = useInView();
	const navigate = useNavigate();

	const { postListData, fetchNextPage, isFetchingNextPage, hasNextPage } = usePostList(postFilterObj, searchKeyword);

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<PostListWrap>
			{postListData?.pages.map((page: any, idx: number) => {
				return (
					<React.Fragment key={idx}>
						{page.data.map((post: PostDetailData) => (
							<div
								key={post.id}
								style={{ cursor: 'pointer' }}
								onClick={() => {
									navigate(`/post/${post.id}`);
								}}
							>
								<PostListItem post={post} />
							</div>
						))}
					</React.Fragment>
				);
			})}
			{isFetchingNextPage ? <SkeletonPostList /> : <div className="inviewDiv" ref={ref} />}
		</PostListWrap>
	);
};

export default PostList;
