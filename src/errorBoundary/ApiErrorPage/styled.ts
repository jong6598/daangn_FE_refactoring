import styled from 'styled-components';

export const ErrorBoundaryWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 7rem);
	p {
		margin-bottom: 1.5em;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: ${({ theme }) => theme.fontWeights.bold};
	}
	button {
		width: 100px;
		height: 30px;
		border-radius: 12px;
		border: none;
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.normal};
		text-decoration: none;
	}
`;
