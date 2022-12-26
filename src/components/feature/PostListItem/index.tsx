import { AiOutlineHeart } from 'react-icons/ai';

import { Logo } from '@src/assets/image';
import { PostDetailResponseDto } from '@src/types/api';
import { numberWithCommasConverter } from '@src/utils/numberUtils';

import { PostListItemWrap } from './styled';

const PostListItem = ({ post }: PostDetailResponseDto) => {
	return (
		<PostListItemWrap>
			<div className="postDiv">
				<div className="imgDiv">
					<img src={Logo} alt="postimage" />
				</div>
				<div className="infoDiv">
					<p>{post.title}</p>
					<p className="area">
						{post.area} · {post.after}
					</p>
					<p>{numberWithCommasConverter(String(post.price))} 원</p>
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
