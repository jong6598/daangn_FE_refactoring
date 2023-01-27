import styled from 'styled-components';

export const LoaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	.loading_spinner {
		width: 3.125rem;
		height: 3.125rem;
		border: 0.5rem solid ${({ theme }) => theme.colors.primary[200]};
		border-top: 0.5rem solid ${({ theme }) => theme.colors.green};
		border-radius: 50%;

		-webkit-animation: spin 1s linear infinite;
		animation: spin 1s linear infinite;

		@-webkit-keyframes spin {
			0% {
				-webkit-transform: rotate(0deg);
			}
			100% {
				-webkit-transform: rotate(360deg);
			}
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
	p {
		margin-top: 1rem;
	}
`;
