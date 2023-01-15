import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlusCircle } from '@react-icons/all-files/fi/FiPlusCircle';

import { Layout, DropDown, SearchInput } from '@src/components';
import MissingInfoItem from '@src/components/feature/MissingInfoItem';
import PostList from '@src/components/feature/PostList';
import { dropDownTable } from '@src/constants/dropDown';
import ApiErrorBoundary from '@src/errorBoundary/ApiErrorBoundary';
import ApiErrorPage from '@src/errorBoundary/ApiErrorPage';

import { PostListPageWrap } from './styled';

const PostListPage = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: 'ALL',
		category: 'ALL',
	});
	const AgreementToMissingInfo = JSON.parse(localStorage.getItem('Agreement') || 'true');

	const handleSearchByKeyword = (keyword: string) => {
		setSearchKeyword(keyword);
	};

	const handleDropdownFilterChange = (value: string, changeTarget: string) => {
		setPostFilterObj({ ...postFilterObj, [changeTarget]: value });
	};

	return (
		<Layout>
			<PostListPageWrap>
				<div className="headerDiv">
					<div className="filterDiv">
						<DropDown dropdownTarget="area" options={dropDownTable.AreaOptions} onDropdownChange={handleDropdownFilterChange} />
						<DropDown
							dropdownTarget="category"
							options={dropDownTable.CategoryOptions}
							onDropdownChange={handleDropdownFilterChange}
						/>
					</div>
					<SearchInput onSearchByKeyword={handleSearchByKeyword} />
				</div>
				<ApiErrorBoundary fallback={ApiErrorPage}>
					{AgreementToMissingInfo && <MissingInfoItem />}
					<PostList postFilterObj={postFilterObj} searchKeyword={searchKeyword} />
					<div className="postAddDiv">
						<Link to="/addpost">
							<FiPlusCircle />
						</Link>
					</div>
				</ApiErrorBoundary>
			</PostListPageWrap>
		</Layout>
	);
};

export default PostListPage;
