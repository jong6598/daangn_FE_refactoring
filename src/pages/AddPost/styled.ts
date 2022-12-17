import styled from 'styled-components';

export const PostAddWrap = styled.div`
	height: calc(100vh - 7rem);
	width: 40rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: flex-start;
	justify-content: space-evenly;
	h2 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	div {
		width: 100%;
		display: flex;
		padding: 0 1rem;
		p {
			margin-right: 1rem;
		}
		input {
			width: 60%;
		}
	}

	.contentDiv {
		textarea {
			width: 35rem;
			height: 8rem;
		}
	}
	button {
		width: 20rem;
		margin-left: 10rem;
		font-size: 1.3rem;
		padding: 0.3rem;
		border-radius: 0.5rem;
		border: none;
		background-color: #ffecd7;
	}
`;
