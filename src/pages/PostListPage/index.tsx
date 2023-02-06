import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlusCircle } from '@react-icons/all-files/fi/FiPlusCircle';

import { Layout, DropDown, SearchInput, MissingInfoItem, PostList } from '@src/components';
import { dropDownTable } from '@src/constants/dropDown';
import ApiErrorBoundary from '@src/errorBoundary/ApiErrorBoundary';
import ApiErrorPage from '@src/errorBoundary/ApiErrorPage';
import UseBrowserStorage from '@src/services/BrowserStorage';

import { PostListPageWrap } from './styled';

const PostListPage = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: 'ALL',
		category: 'ALL',
	});
	const browserStorage = new UseBrowserStorage();
	const AgreementToMissingInfo = browserStorage.get('Agreement', 'true');

	return (
		<Layout>
			<PostListPageWrap>
				<div className="headerDiv">
					<div className="filterDiv">
						<DropDown<typeof postFilterObj>
							dropdownTarget="area"
							options={dropDownTable.AreaOptions}
							filterObj={postFilterObj}
							setFilterObj={setPostFilterObj}
						/>
						<DropDown<typeof postFilterObj>
							dropdownTarget="category"
							options={dropDownTable.CategoryOptions}
							filterObj={postFilterObj}
							setFilterObj={setPostFilterObj}
						/>
					</div>
					<SearchInput setSearchKeyword={setSearchKeyword} />
				</div>
				<ApiErrorBoundary fallback={ApiErrorPage}>
					{AgreementToMissingInfo && <MissingInfoItem />}
					<PostList postFilterObj={postFilterObj} searchKeyword={searchKeyword} AgreementToMissingInfo={AgreementToMissingInfo} />
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
