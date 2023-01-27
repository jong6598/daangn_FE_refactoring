import styled from 'styled-components';

export const MissingInfoItemWrap = styled.div`
	position: relative;
	top: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
	border-bottom: 0.1rem solid #dedede;
	cursor: pointer;
	.postDiv {
		display: flex;
		.imgDiv {
			img {
				width: 10rem;
				height: 10rem;
				padding: 1rem;
				border-radius: 30%;
			}
		}
		.infoDiv {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			p {
				font-size: 1.2rem;
				font-weight: 600;
			}
			.area {
				font-size: 0.8rem;
				color: #a1a1a1;
			}
		}
	}
`;
