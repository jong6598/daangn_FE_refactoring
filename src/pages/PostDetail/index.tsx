import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaCarrot } from 'react-icons/fa';
import usePostDetail from '../../hooks/usePostDetail';
import Layout from '../../components/layout';
import { PostDetailWrap } from './styled';

const PostDetail = () => {
	const navigate = useNavigate();
	const params = useParams();
	const loginUserName = JSON.parse(localStorage.getItem('userInfo')!).username;
	const { postInfo, toggleLike, deleteContent } = usePostDetail(params.postId!);

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
									<button onClick={() => navigate(`/post/${params.postId}`)}>
										<AiOutlineEdit />
									</button>
									<button onClick={deleteContent}>
										<AiOutlineDelete />
									</button>
								</div>
							)}
						</div>
						<div className="postDiv">
							<img src="/image/iphone.png" alt="postimage" />
							<div className="userDiv">
								<FaCarrot />
								<div className="userInfo">
									<p>작성자: {postInfo.nickname}</p>
									<p>지역: {postInfo.area}</p>
								</div>
								<button onClick={toggleLike}>
									{postInfo.isLiked ? (
										<img src="/image/heart.png" alt="heartbutton" />
									) : (
										<img src="/image/emptyheart.png" alt="emptyheartbutton" />
									)}
								</button>
							</div>
							<div className="contentDiv">
								<p className="title"> {postInfo.title}</p>
								<p className="category">
									{postInfo.category} · {postInfo.category}
								</p>
								<p> {postInfo.price}</p>
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
