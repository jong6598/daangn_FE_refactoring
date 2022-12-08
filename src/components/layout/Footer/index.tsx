import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterWrap } from './styled';
import { HiHome, HiOutlineHome, HiChatAlt2, HiOutlineChatAlt2 } from 'react-icons/hi';
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri';

const Footer = () => {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<FooterWrap>
			<div className="buttonDiv">
				<button
					onClick={() => {
						navigate('/home');
						setCurrentPage('home');
					}}
				>
					{currentPage === 'home' ? <HiHome /> : <HiOutlineHome />}
				</button>
				<p>홈</p>
			</div>
			<div className="buttonDiv">
				<button
					onClick={() => {
						navigate('/mychatroom');
						setCurrentPage('mychatroom');
					}}
				>
					{currentPage === 'mychatroom' ? <HiChatAlt2 /> : <HiOutlineChatAlt2 />}
				</button>
				<p>채팅</p>
			</div>
			<div className="buttonDiv">
				<button
					onClick={() => {
						navigate('/mypage');
						setCurrentPage('mypage');
					}}
				>
					{currentPage === 'mypage' ? <RiUser3Fill /> : <RiUser3Line />}
				</button>
				<p>나의 당근</p>
			</div>
		</FooterWrap>
	);
};

export default Footer;
