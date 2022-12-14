import { useState } from 'react';
import PostListItem from '../../components/feature/PostListItem';
import Layout from '../../components/layout';
import DropDown from '../../components/shared/DropDown';
import SearchInput from '../../components/shared/SearchInput';
import { dropDownTable } from '../../constants/dropDown';
import { PostListWrap } from './styled';

const PostList = () => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: '',
		category: '',
	});

	console.info(searchKeyword);

	const handleSearchByKeyword = (keyword: string) => {
		setSearchKeyword(keyword);
	};

	const handleDropdownFilterChange = (value: string, changeTarget: string) => {
		setPostFilterObj({ ...postFilterObj, [changeTarget]: value });
	};

	return (
		<Layout>
			<PostListWrap>
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
				<div className="listDiv">
					<PostListItem />
					<PostListItem />
					<PostListItem />
					<PostListItem />
				</div>
			</PostListWrap>
		</Layout>
	);
};

export default PostList;
