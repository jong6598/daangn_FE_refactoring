import styled from 'styled-components';

export const NoDataWrap = styled.div<{ heightSize: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: ${({ heightSize }) => heightSize};
`;
