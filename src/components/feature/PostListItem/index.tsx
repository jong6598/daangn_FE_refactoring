import { PostListItemWrap } from './styled';
import { AiOutlineHeart } from 'react-icons/ai';
import { PostDetailResponseDto } from '../../../types/api';

const PostListItem = ({ post }: PostDetailResponseDto) => {
	return (
		<PostListItemWrap>
			<div className="postDiv">
				<div className="imgDiv">
					<img src="/image/logo.png" alt="postimage" />
				</div>
				<div className="infoDiv">
					<p>{post.title}</p>
					<p className="area">
						{post.area} · {post.after}
					</p>
					<p>{post.price}원</p>
				</div>
			</div>
			<div className="likeDiv">
				<AiOutlineHeart />
				<p>{post.likeCount}</p>
			</div>
		</PostListItemWrap>
	);
};

export default PostListItem;
