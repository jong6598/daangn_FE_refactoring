import SkeletonElement from '@src/components/feature/Skeleton/SkeletonElement';

import { SkeletonContainer } from './styled';

const SkeletonListItem = () => {
	return (
		<SkeletonContainer>
			<div className="skeletonItemDiv">
				<div className="skeletonImgDiv">
					<SkeletonElement type="img" />
				</div>
				<div className="skeletonInfoDiv">
					<SkeletonElement type="title" />
					<SkeletonElement type="area" />
					<SkeletonElement type="price" />
				</div>
			</div>
			<div className="skeletonLikeDiv">
				<SkeletonElement type="heart" />
				<SkeletonElement type="likeCount" />
			</div>
		</SkeletonContainer>
	);
};

export default SkeletonListItem;
