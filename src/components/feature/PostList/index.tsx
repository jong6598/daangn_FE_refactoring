import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import { NoData, PostListItem } from '@src/components';
import SkeletonList from '@src/components/feature/Skeleton/SkeletonList';
import usePostList from '@src/hooks/usePostList';
import { PostDetailData } from '@src/types/api';

import { PostListWrap } from './styled';

type Props = {
	postFilterObj: { area: string; category: string };
	searchKeyword: string;
	AgreementToMissingInfo: boolean;
};

const PostList = ({ postFilterObj, searchKeyword, AgreementToMissingInfo }: Props) => {
	const { ref, inView } = useInView();
	const navigate = useNavigate();

	const { postListData, fetchNextPage, isFetchingNextPage, hasNextPage } = usePostList(postFilterObj, searchKeyword);

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<PostListWrap AgreementToMissingInfo={AgreementToMissingInfo}>
			{postListData?.pages[0].data.length === parseInt('0') && (
				<NoData dataName={'게시물'} heigthSize={AgreementToMissingInfo ? 'calc(100vh - 23.9rem)' : 'calc(100vh - 14rem)'} />
			)}
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
