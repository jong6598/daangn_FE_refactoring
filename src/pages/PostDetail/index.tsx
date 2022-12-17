import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaCarrot } from 'react-icons/fa';
import Layout from '../../components/layout';
import { PostDetailWrap } from './styled';

const PostDetail = () => {
	const navigate = useNavigate();
	const params = useParams();
	// const nickName = JSON.parse(localStorage.getItem('userInfo')!).username;

	return (
		<Layout>
			<PostDetailWrap>
				<div className="headerDiv">
					<button onClick={() => navigate('/home')}>
						<AiOutlineHome />
					</button>
					<div className="buttonDiv">
						<button onClick={() => navigate(`/post/${params.postId}`)}>
							<AiOutlineEdit />
						</button>
						<button>
							<AiOutlineDelete />
						</button>
					</div>
				</div>
				<div className="postDiv">
					<img src="/image/iphone.png" alt="postimage" />
					<div className="userDiv">
						<FaCarrot />
						<div className="userInfo">
							<p>작성자: 당근이</p>
							<p>지역: 대구 달성군</p>
						</div>
						<button>
							<img src="/image/heart.png" alt="heartbutton" />
						</button>
					</div>
					<div className="contentDiv">
						<p className="title"> 아이폰 팝니다.</p>
						<p className="category"> 디지털/가전 · 15분 전</p>
						<p> 500,000원</p>
						<p> 아이폰 팝니다. 미개봉 새상품입니다. 단순변심으로 인해 거래합니다. 네고불가능</p>
					</div>
				</div>
			</PostDetailWrap>
		</Layout>
	);
};

export default PostDetail;
