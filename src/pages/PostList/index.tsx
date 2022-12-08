import { useState } from 'react';
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
					<div>
						<DropDown dropdownTarget="area" options={dropDownTable.AreaOptions} onDropdownChange={handleDropdownFilterChange} />
						<DropDown
							dropdownTarget="category"
							options={dropDownTable.CategoryOptions}
							onDropdownChange={handleDropdownFilterChange}
						/>
					</div>
					<SearchInput onSearchByKeyword={handleSearchByKeyword} />
				</div>
			</PostListWrap>
		</Layout>
	);
};

export default PostList;
