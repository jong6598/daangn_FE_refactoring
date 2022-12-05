import styled from 'styled-components';

export const SignUpWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	max-width: 25rem;
	margin: 8vh auto 0;
	padding: 3rem;
	border: 0.2rem solid #e78111;
	border-radius: 2rem;
	box-shadow: 0rem 0.4rem 0.5rem 0rem #0000001a;
	h1 {
		font-weight: 600;
		font-size: 1.5rem;
	}
	img {
		width: 7rem;
		height: 7rem;
	}
	label {
		font-weight: 700;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 15rem;
	height: 4rem;
	align-items: flex-start;
	margin-top: 1rem;
	input {
		width: 100%;
		border-radius: 0.3rem;
		transition: background 0.2s ease-in-out;
		font-size: 0.9rem;
		&:hover,
		&:focus {
			background: #f1f1f1;
			padding: 0.5rem 1.5rem;
		}
	}
`;

export const Error = styled.p`
	margin-top: 0.5rem;
	font-size: 0.8rem;
	color: #e78111;
`;

export const BtnContainer = styled.div`
	display: flex;
	margin-top: 0.8rem;
	.joinBtn {
		cursor: pointer;
		padding: 0.7rem 1rem;
		font-size: 1.3rem;
		color: white;
		background: #e78111;
		outline: 0;
		border: 0;
		border-radius: 0.7rem;
		margin: 0 0.5rem;
		&:disabled {
			background: #e5e5e5;
			cursor: default;
		}
	}
	.cancleBtn {
		cursor: pointer;
		padding: 0.7rem 1.9rem;
		font-size: 1.3rem;
		color: white;
		background-color: #e78111;
		outline: 0;
		border: 0;
		border-radius: 0.7rem;
		margin: 0 0.5rem;
	}
`;
