import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

import { PostListItem } from '@src/components';
import SkeletonList from '@src/components/feature/Skeleton/SkeletonList';
import useMyPostList from '@src/hooks/useMyPostList';
import { PostDetailData } from '@src/types/api';

import { MypageListWrap } from './styled';

type Props = {
	filter: string;
};

const MypageList = ({ filter }: Props) => {
	const { ref, inView } = useInView();
	const navigate = useNavigate();
	const { myPostListData, fetchNextPage, isFetchingNextPage } = useMyPostList(filter);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<MypageListWrap>
			{myPostListData?.pages.map((page: any, idx: number) => {
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
		</MypageListWrap>
	);
};

export default MypageList;
