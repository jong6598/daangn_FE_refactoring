import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AiOutlineHome, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaCarrot } from 'react-icons/fa';

import { EmptyHeart, Heart, Iphone } from '@src/assets/image';
import { Layout } from '@src/components';
import usePostDetail from '@src/hooks/usePostDetail';
import { numberWithCommasConverter } from '@src/utils/numberUtils';

import { PostDetailWrap } from './styled';

const PostDetail = () => {
	const navigate = useNavigate();
	const params = useParams();
	const loginUserName = JSON.parse(localStorage.getItem('userInfo')!).username;
	const { postInfo, onToggleLike, onDelete } = usePostDetail(params.postId!);

	return (
		<Layout>
			<PostDetailWrap>
				{postInfo && (
					<React.Fragment>
						<div className="headerDiv">
							<button onClick={() => navigate('/home')}>
								<AiOutlineHome />
							</button>
							{postInfo.nickname === loginUserName && (
								<div className="buttonDiv">
									<button onClick={() => navigate(`/post/${params.postId}/edit`, { state: postInfo })}>
										<AiOutlineEdit />
									</button>
									<button onClick={() => onDelete()}>
										<AiOutlineDelete />
									</button>
								</div>
							)}
						</div>
						<div className="postDiv">
							<img src={Iphone} alt="postimage" />
							<div className="userDiv">
								<FaCarrot />
								<div className="userInfo">
									<p>작성자: {postInfo.nickname}</p>
									<p>지역: {postInfo.area}</p>
								</div>
								{postInfo.nickname !== loginUserName && (
									<button onClick={() => onToggleLike()}>
										{postInfo.isLiked ? <img src={Heart} alt="heartbutton" /> : <img src={EmptyHeart} alt="emptyheartbutton" />}
									</button>
								)}
							</div>
							<div className="contentDiv">
								<p className="title"> {postInfo.title}</p>
								<p className="category">
									{postInfo.category} · {postInfo.after}
								</p>
								<p> {numberWithCommasConverter(String(postInfo.price))}원</p>
								<p> {postInfo.content}</p>
							</div>
						</div>
					</React.Fragment>
				)}
			</PostDetailWrap>
		</Layout>
	);
};

export default PostDetail;
