import styled from 'styled-components';

export const SkeletonContainer = styled.div`
	--elwidth: 15rem;
	--elheight: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	border-bottom: 0.1rem solid #dedede;

	.skeleton {
		background: #ddd;
	}

	.skeletonItemDiv {
		display: flex;
		.skeletonImgDiv {
			margin-right: 1rem;
			.skeleton.img {
				width: 9rem;
				height: 8rem;
			}
		}
		.skeletonInfoDiv {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			.skeleton.title {
				width: var(--elwidth);
				height: var(--elheight);
			}
			.skeleton.area {
				width: 13rem;
				height: var(--elheight);
			}
			.skeleton.price {
				width: var(--elwidth);
				height: var(--elheight);
			}
		}
	}
	.skeletonLikeDiv {
		display: flex;
		flex-direction: column;
		align-items: center;
		.skeleton.heart {
			width: 1rem;
			height: 1rem;
			margin-bottom: 0.2rem;
		}
		.skeleton.likeCount {
			width: 0.8rem;
			height: 1rem;
		}
	}
`;
