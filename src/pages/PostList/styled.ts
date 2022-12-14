import styled from 'styled-components';

export const PostListWrap = styled.div`
	position: relative;
	.headerDiv {
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 40rem;
		height: 7rem;
		position: fixed;
		background-color: #ffecd7;
		border-bottom: 0.1rem solid #dedede;
		padding: 0 1rem;
		.filterDiv {
			width: 15rem;
			display: flex;
			justify-content: space-between;
			select {
				width: 7rem;
				cursor: pointer;
				border-radius: 5px;
				border: none;
				padding: 1rem 0.2rem;
				background: #fffbf7;
				&:hover {
					background: #f6f6f6;
				}
			}
		}
	}
	.listDiv {
		height: calc(100vh - 14rem);
		position: relative;
		top: 7rem;
		overflow-y: auto;
	}
`;
