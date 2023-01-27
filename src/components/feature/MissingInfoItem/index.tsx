import { Cat } from '@src/assets/image';

import { MissingInfoItemWrap } from './styled';

const MissingInfoItem = () => {
	return (
		<MissingInfoItemWrap>
			<div className="postDiv">
				<div className="imgDiv">
					<img src={Cat} alt="postimage" />
				</div>
				<div className="infoDiv">
					<p>고양이를 찾습니다</p>
					<p className="area">잃어버린 지역 · 인상착의</p>
					<p>실종일: 2023-01-12</p>
					<p>연락처: 010-xxxx-xxxx</p>
				</div>
			</div>
		</MissingInfoItemWrap>
	);
};

export default MissingInfoItem;
