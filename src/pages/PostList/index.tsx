import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Layout from '../../components/layout';
import PostListItem from '../../components/feature/PostListItem';
import DropDown from '../../components/shared/DropDown';
import SearchInput from '../../components/shared/SearchInput';
import { dropDownTable } from '../../constants/dropDown';
import usePostList from '../../hooks/usePostList';
import { PostListWrap } from './styled';
import { FiPlusCircle } from 'react-icons/fi';
import { PostDetailData } from '../../types/api';

const PostList = () => {
	const navigate = useNavigate();
	const { ref, inView } = useInView();
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: 'ALL',
		category: 'ALL',
	});
	const { postListData, fetchNextPage, isFetchingNextPage } = usePostList(searchKeyword, postFilterObj);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

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
				{postListData &&
					postListData.pages.map((page: any, idx: number) => {
						return (
							<React.Fragment key={idx}>
								{page.data.map((post: PostDetailData) => (
									<div
										className="listDiv"
										key={post.id}
										style={{ cursor: 'pointer' }}
										onClick={() => {
											navigate(`/post/${post.id}`);
										}}
									>
										<PostListItem post={post} />
									</div>
								))}
							</React.Fragment>
						);
					})}
				{isFetchingNextPage ? <div>로딩중...</div> : <div ref={ref} />}
				<div className="postAddDiv">
					<Link to="/addpost">
						<FiPlusCircle />
					</Link>
				</div>
			</PostListWrap>
		</Layout>
	);
};

export default PostList;
