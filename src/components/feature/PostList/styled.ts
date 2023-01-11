import styled from 'styled-components';

export const PostListWrap = styled.div<{ onMissingInfo: boolean }>`
	position: relative;
	height: ${({ onMissingInfo }) => (onMissingInfo ? 'calc(100vh - 23.9rem)' : 'calc(100vh - 14rem)')};
	top: 7rem;
	overflow-y: auto;
	.inviewDiv {
		height: 0.1rem;
	}
`;
