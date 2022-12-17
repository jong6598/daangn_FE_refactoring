import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { logout } from '../../core/apis/auth';
import Layout from '../../components/layout';
import { MypageWrap } from './styled';
import { IoIosPaper } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { FaCarrot } from 'react-icons/fa';
import useMyPostList from '../../hooks/useMyPostList';
import { PostDetailData } from '../../types/api';
import PostListItem from '../../components/feature/PostListItem';

const Mypage = () => {
	const navigate = useNavigate();
	const { ref, inView } = useInView();
	const [filter, setFilter] = useState('sale');
	const nickName = JSON.parse(localStorage.getItem('userInfo')!).username;
	const { myPostListData, fetchNextPage, isFetchingNextPage } = useMyPostList(filter);

	const handleLogout = async () => {
		await logout;
		localStorage.clear();
		alert('로그아웃 되었습니다.');
		navigate('/');
	};

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<Layout>
			<MypageWrap>
				<p className="pageTitle">나의 당근</p>
				<div className="userinfoDiv">
					<FaCarrot />
					<p>{nickName} 님</p>
					<button onClick={handleLogout}>로그아웃</button>
				</div>
				<div className="filterDiv">
					<button
						onClick={() => {
							setFilter('sale');
						}}
					>
						<IoIosPaper />
						<p>판매내역</p>
					</button>
					<button
						onClick={() => {
							setFilter('interest');
						}}
					>
						<AiFillHeart />
						<p>관심목록</p>
					</button>
				</div>
				{myPostListData &&
					myPostListData.pages.map((page: any, idx: number) => {
						return (
							<React.Fragment key={idx}>
								{page.data.map((post: PostDetailData) => (
									<div
										className="contentDiv"
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
				{isFetchingNextPage ? <div>로딩중...</div> : <div ref={ref} />}
			</MypageWrap>
		</Layout>
	);
};

export default Mypage;
