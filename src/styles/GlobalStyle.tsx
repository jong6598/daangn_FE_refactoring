import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
	${reset};
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	body {
		font-size: 16px;
	}
	ul,
	li {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
	}
	::-webkit-scrollbar-track {
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primary[100]};
		border: 0.1875rem solid ${({ theme }) => theme.colors.gray[100]};
		border-radius: 0.5rem;
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => theme.colors.primary[200]};
		border: 0.1875rem solid ${({ theme }) => theme.colors.primary[100]};
	}
`;

export default GlobalStyle;
