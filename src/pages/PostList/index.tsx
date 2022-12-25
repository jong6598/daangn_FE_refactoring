import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiPlusCircle } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

import { Layout, PostListItem, DropDown, SearchInput } from '@src/components';
import SkeletonPostList from '@src/components/feature/Skeleton/SkeletonPostList';
import { dropDownTable } from '@src/constants/dropDown';
import usePostList from '@src/hooks/usePostList';
import { PostDetailData } from '@src/types/api';

import { PostListWrap } from './styled';

const PostList = () => {
	const navigate = useNavigate();
	const { ref, inView } = useInView();
	const [searchKeyword, setSearchKeyword] = useState('');
	const [postFilterObj, setPostFilterObj] = useState({
		area: 'ALL',
		category: 'ALL',
	});
	const { postListData, fetchNextPage, isFetchingNextPage, hasNextPage } = usePostList(postFilterObj, searchKeyword);

	useEffect(() => {
		if (inView && hasNextPage) {
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
				<div className="listDiv">
					{postListData &&
						postListData.pages.map((page: any, idx: number) => {
							return (
								<React.Fragment key={idx}>
									{page.data.map((post: PostDetailData) => (
										<div
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
					{isFetchingNextPage ? <SkeletonPostList /> : <div className="filterDiv" ref={ref} />}
				</div>
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
