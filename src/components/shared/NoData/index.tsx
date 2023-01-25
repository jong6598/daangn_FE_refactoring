import { NoDataWrap } from './styled';

type Props = {
	dataName: string;
	heigthSize: string;
};

const NoData = ({ dataName, heigthSize }: Props) => {
	return (
		<NoDataWrap heightSize={heigthSize}>
			<p>아직 {dataName}이 없습니다.</p>
			<p>지금 등록해보세요!</p>
		</NoDataWrap>
	);
};

export default NoData;
