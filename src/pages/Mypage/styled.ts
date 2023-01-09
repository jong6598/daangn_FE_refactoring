import styled from 'styled-components';

export const MypageWrap = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 7rem);
	.pageTitle {
		margin: 1rem 2.7rem;
		font-size: 1.3rem;
		font-weight: 700;
	}
	.userinfoDiv {
		height: 7rem;
		padding: 3.7rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		svg {
			width: 5rem;
			height: 5rem;
			padding: 0.3rem;
			margin-right: 3rem;
			border-radius: 5rem;
			border: 2px solid #e78111;
			color: #e78111;
		}
		p {
			margin-right: 1rem;
			font-size: 1.3rem;
			font-weight: 600;
		}
		button {
			padding: 0.5rem;
			border: none;
			border-radius: 0.5rem;
			background: #ffecd7;
		}
	}
	.filterDiv {
		height: 5rem;
		display: flex;
		padding: 1rem auto;
		justify-content: space-evenly;
		align-items: center;
		border-bottom: 0.1rem solid #ffecd7;
		button {
			border: none;
			background-color: transparent;
			cursor: pointer;
			svg {
				width: 3rem;
				height: 3rem;
				padding: 0.3rem;
				border-radius: 50%;
				color: #e78111;
				background-color: #ffecd7;
			}
		}
	}
`;
