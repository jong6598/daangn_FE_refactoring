import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import PostListItem from '@src/components/feature/PostListItem';
import SkeletonList from '@src/components/feature/Skeleton/SkeletonList';
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

	const AgreementToMissingInfo = JSON.parse(localStorage.getItem('Agreement') || 'true');

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<PostListWrap AgreementToMissingInfo={AgreementToMissingInfo}>
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
			{isFetchingNextPage ? <SkeletonList /> : <div className="inviewDiv" ref={ref} />}
		</PostListWrap>
	);
};

export default PostList;
