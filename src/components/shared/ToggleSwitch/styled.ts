import styled from 'styled-components';

export const SwitchWrap = styled.div`
	display: flex;
	flex-direction: column;
	span {
		color: gray;
		margin-top: 0.5rem;
	}
`;

export const ToggleSwitchWrap = styled.label<{ checked: boolean }>`
	cursor: pointer;
	text-indent: -9999px;
	width: 5rem;
	height: 2.5rem;
	display: block;
	background: ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.gray[300])};
	border-radius: 6.25rem;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		right: ${({ checked }) => (checked ? '5px' : 'calc(55% - 5px)')};
		background-color: #fff;
		top: 0.3rem;
		width: 1.875rem;
		height: 1.875rem;
		border-radius: 5.625rem;
		transition: 0.3s;
	}
`;
