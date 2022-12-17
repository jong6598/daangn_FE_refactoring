import styled from 'styled-components';

export const PostListItemWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
	border-bottom: 0.1rem solid #dedede;
	cursor: pointer;
	.postDiv {
		display: flex;
		.imgDiv {
			img {
				width: 10rem;
				height: 10rem;
			}
		}
		.infoDiv {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			p {
				font-size: 1.2rem;
				font-weight: 600;
			}
			.area {
				font-size: 0.8rem;
				color: #a1a1a1;
			}
		}
	}

	.likeDiv {
		svg {
			width: 1rem;
			height: 1rem;
		}
	}
`;
