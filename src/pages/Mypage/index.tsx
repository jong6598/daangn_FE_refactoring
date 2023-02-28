import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { FaCarrot } from '@react-icons/all-files/fa/FaCarrot';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';

import { Layout, MypageList, ToggleSwitch } from '@src/components';
import { storage } from '@src/constants/storage';
import { logout } from '@src/core/apis/auth';
import ApiErrorBoundary from '@src/errorBoundary/ApiErrorBoundary';
import ApiErrorPage from '@src/errorBoundary/ApiErrorPage';
import { UserInfoType } from '@src/pages/SignIn';
import BrowserStorageModule from '@src/services/BrowserStorageModule';

import { MypageWrap } from './styled';

const Mypage = () => {
	const [filter, setFilter] = useState('sale');
	const navigate = useNavigate();
	const browserStorage = new BrowserStorageModule(storage);
	const nickName = browserStorage.get<UserInfoType>('userInfo')!.nickname;

	const handleLogout = async () => {
		await logout;
		browserStorage.clear();
		alert('로그아웃 되었습니다.');
		navigate('/');
	};

	return (
		<Layout>
			<MypageWrap>
				<p className="pageTitle">나의 당근</p>
				<div className="userinfoDiv">
					<FaCarrot />
					<p>{nickName} 님</p>
					<button onClick={handleLogout}>로그아웃</button>
					<ToggleSwitch storageKey="Agreement" switchLabel="실종정보" />
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
				<ApiErrorBoundary fallback={ApiErrorPage}>
					<MypageList filter={filter} />
				</ApiErrorBoundary>
			</MypageWrap>
		</Layout>
	);
};

export default Mypage;
