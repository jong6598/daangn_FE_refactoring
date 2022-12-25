import styled from 'styled-components';

export const PostDetailWrap = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	.headerDiv {
		z-index: 10;
		width: 40rem;
		height: 4rem;
		display: flex;
		position: fixed;
		align-items: center;
		padding: 0 2rem;
		gap: 28rem;
		background-color: #ffecd7;
		border-bottom: 0.1rem solid #dedede;
		button {
			font-size: 2rem;
			display: flex;
			margin-top: 1.3rem;
			background-color: transparent;
			border: 0;
			cursor: pointer;
		}
		.buttonDiv {
			display: flex;
			flex-direction: row;
		}
	}
	.postDiv {
		height: calc(100vh - 11rem);
		position: relative;
		top: 4rem;
		overflow-y: auto;
		padding: 2rem 2rem;
		img {
			display: block;
			margin: 0 auto;
			width: 100%;
			max-width: 15rem;
			border-radius: 10%;
		}
		.userDiv {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			margin: 3rem 0;
			svg {
				width: 8rem;
				height: 5rem;
				color: #e78111;
				padding: 0.3rem;
				margin: 0 1rem;
				border-radius: 5rem;
				border: 2px solid #e78111;
			}
			.userInfo {
				width: 100%;
				p {
					margin-bottom: 0.5rem;
				}
			}
		}
		button {
			background-color: transparent;
			border: 0;
			cursor: pointer;
			img {
				width: 3rem;
				height: 3rem;
			}
		}
		.contentDiv {
			display: flex;
			flex-direction: column;
			max-width: 30rem;
			text-align: left;
			p {
				margin: 0.7rem;
			}
			.title {
				font-size: 1.3rem;
				font-weight: 500;
			}
			.category {
				font-size: 0.8rem;
				color: #a1a1a1;
			}
		}
	}
`;
