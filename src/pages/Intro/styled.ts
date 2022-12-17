import styled from 'styled-components';

export const IntroWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	height: 100vh;
	width: 40rem;
	padding: 1rem;
	align-items: center;
	background-color: #faf7f2;
	p {
		margin-bottom: 1rem;
	}
	.discriptionDiv {
		margin-top: 15vh;
		display: flex;
		flex-direction: row;
		.bold {
			font-weight: 700;
			font-size: 2.5rem;
		}
		img {
			width: 25rem;
			height: 25rem;
		}
	}
	.joinBtn {
		width: 100%;
		margin-top: 1rem;
		cursor: pointer;
		padding: 1rem 10rem;
		font-size: 1.5rem;
		color: white;
		background-color: #e78111;
		outline: 0;
		border: 0;
		border-radius: 0.7rem;
	}
	.loginBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 1rem;
		img {
			width: 1.2rem;
			height: 1.2rem;
		}
		p {
			margin-bottom: 0;
			margin-top: 3px;
		}
		button {
			margin-left: 0.5rem;
			background-color: transparent;
			border: 0;
			align-items: center;
			font-size: 1rem;
			color: #e78111;
			cursor: pointer;
		}
	}
`;
