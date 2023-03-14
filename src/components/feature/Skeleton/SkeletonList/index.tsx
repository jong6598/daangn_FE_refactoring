import DeferredComponent from '@src/components/hoc/DeferredComponent';

import SkeletonListItem from './SkeletonListItem';

const SkeletonList = () => {
	return (
		<>
			<SkeletonListItem />
			<SkeletonListItem />
			<SkeletonListItem />
			<SkeletonListItem />
			<SkeletonListItem />
			<SkeletonListItem />
		</>
	);
};

export default DeferredComponent(SkeletonList);
