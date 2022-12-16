import styled from 'styled-components';

export const FooterWrap = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 40rem;
	font-size: 1.5rem;
	height: 7rem;
	background-color: #ffecd7;
	border-top: 0.1rem solid #dedede;
	.buttonDiv {
		display: flex;
		flex-direction: column;
		align-items: center;
		button {
			cursor: pointer;
			border: 0;
			background-color: transparent;
			svg {
				width: 2rem;
				height: 2rem;
			}
		}
	}
`;
