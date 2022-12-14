import { PostListItemWrap } from './styled';
import { AiOutlineHeart } from 'react-icons/ai';

const PostListItem = () => {
	return (
		<PostListItemWrap>
			<div className="postDiv">
				<div className="imgDiv">
					<img src="/image/logo.png" alt="postimage" />
				</div>
				<div className="infoDiv">
					<p>아이폰</p>
					<p className="area">대구 달성군 · 1시간 전</p>
					<p>100,0000원 </p>
				</div>
			</div>
			<div className="likeDiv">
				<AiOutlineHeart />
				<p>10</p>
			</div>
		</PostListItemWrap>
	);
};

export default PostListItem;
