import { ErrorBoundaryWrap } from './styled';

type Props = {
	onReset: () => void;
};

const ApiErrorPage = ({ onReset }: Props) => {
	return (
		<ErrorBoundaryWrap>
			<p>데이터 불러오기에 실패했어요.</p>
			<button onClick={() => onReset()}> 새로고침 </button>
		</ErrorBoundaryWrap>
	);
};

export default ApiErrorPage;
