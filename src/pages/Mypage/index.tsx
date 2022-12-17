import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../core/apis/auth';
import Layout from '../../components/layout';
import { MypageWrap } from './styled';
import { IoIosPaper } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { FaCarrot } from 'react-icons/fa';

const Mypage = () => {
	const nickName = JSON.parse(localStorage.getItem('userInfo')!).username;
	const [filter, setFilter] = useState('sale');
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout;
		localStorage.clear();
		alert('로그아웃 되었습니다.');
		navigate('/');
	};

	useEffect(() => {
		console.log(filter);
	}, [filter]);

	return (
		<Layout>
			<MypageWrap>
				<p className="pageTitle">나의 당근</p>
				<div className="userinfoDiv">
					<FaCarrot />
					<p>{nickName} 님</p>
					<button onClick={handleLogout}>로그아웃</button>
				</div>
				<div className="filterDiv">
					<button
						onClick={() => {
							setFilter('sale');
						}}
					>
						<IoIosPaper />
						<p>판매내역</p>
					</button>
					<button
						onClick={() => {
							setFilter('interest');
						}}
					>
						<AiFillHeart />
						<p>관심목록</p>
					</button>
				</div>
				<div className="contentDiv"></div>
			</MypageWrap>
		</Layout>
	);
};

export default Mypage;
