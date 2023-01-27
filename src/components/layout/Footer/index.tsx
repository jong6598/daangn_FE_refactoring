import { useLocation, useNavigate } from 'react-router-dom';

import { HiChatAlt2 } from '@react-icons/all-files/hi/HiChatAlt2';
import { HiHome } from '@react-icons/all-files/hi/HiHome';
import { HiOutlineChatAlt2 } from '@react-icons/all-files/hi/HiOutlineChatAlt2';
import { HiOutlineHome } from '@react-icons/all-files/hi/HiOutlineHome';
import { RiUser3Fill } from '@react-icons/all-files/ri/RiUser3Fill';
import { RiUser3Line } from '@react-icons/all-files/ri/RiUser3Line';

import { FooterWrap } from './styled';

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPage = location.pathname;

	return (
		<FooterWrap>
			<div className="buttonDiv">
				<button
					onClick={() => {
						navigate('/home');
					}}
				>
					{currentPage === '/home' ? <HiHome /> : <HiOutlineHome />}
				</button>
				<p>홈</p>
			</div>
			<div className="buttonDiv">
				<button>{currentPage === '/mychatroom' ? <HiChatAlt2 /> : <HiOutlineChatAlt2 />}</button>
				<p>채팅</p>
			</div>
			<div className="buttonDiv">
				<button
					onClick={() => {
						navigate('/mypage');
					}}
				>
					{currentPage === '/mypage' ? <RiUser3Fill /> : <RiUser3Line />}
				</button>
				<p>나의 당근</p>
			</div>
		</FooterWrap>
	);
};

export default Footer;
