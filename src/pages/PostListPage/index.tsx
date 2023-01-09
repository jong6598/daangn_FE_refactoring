import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlusCircle } from 'react-icons/fi';

import { Layout, DropDown, SearchInput } from '@src/components';
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
