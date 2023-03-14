import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlusCircle } from '@react-icons/all-files/fi/FiPlusCircle';

import { Layout, DropDown, SearchInput, MissingInfoItem, PostList } from '@src/components';
import SkeletonList from '@src/components/feature/Skeleton/SkeletonList';
import { dropDownTable } from '@src/constants/dropDown';
import { storage } from '@src/constants/storage';
import ApiErrorBoundary from '@src/errorBoundary/ApiErrorBoundary';
import ApiErrorPage from '@src/errorBoundary/ApiErrorPage';
import BrowserStorageModule from '@src/services/BrowserStorageModule';

import { PostListPageWrap } from './styled';

const PostListPage = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: 'ALL',
		category: 'ALL',
	});
	const browserStorage = new BrowserStorageModule(storage);
	const AgreementToMissingInfo = browserStorage.get<boolean>('Agreement', true);

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
					<Suspense fallback={<SkeletonList />}>
						<PostList
							postFilterObj={postFilterObj}
							searchKeyword={searchKeyword}
							AgreementToMissingInfo={AgreementToMissingInfo!}
						/>
					</Suspense>
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
