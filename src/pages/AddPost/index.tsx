import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Layout, DropDown } from '@src/components';
import { dropDownTable } from '@src/constants/dropDown';
import useAddPost from '@src/hooks/useAddPost';

import { PostAddWrap } from './styled';

type Props = {
	title: string;
	price: number;
	area: string;
	category: string;
	content: string;
	imageUrl: string;
};

const AddPost = () => {
	const location = useLocation();
	const params = useParams();
	const editPostValue: Props = location.state;
	const postId = params.postId;
	const [isEditingMode, setIsEditingMode] = useState(false);
	const [postValue, setPostValue] = useState({
		title: '',
		price: 0,
		area: 'ALL',
		category: 'ALL',
		content: '',
		imageUrl: '',
	});
	const { title, price, content } = postValue;
	const [validatePost, setValidatePost] = useState(false);

	const { onAdd, onChangeInput, onChangeTextArea } = useAddPost({
		isEditingMode,
		postValue,
		postId,
		setPostValue,
		setValidatePost,
	});

	useEffect(() => {
		if (editPostValue) {
			setPostValue(editPostValue);
			setIsEditingMode(true);
		}
	}, []);

	return (
		<Layout>
			<PostAddWrap>
				<h2>게시글 {editPostValue ? '수정' : '작성'}</h2>
				<div>
					<p>제목</p>
					<input type="text" name="title" placeholder="제목을 입력해주세요" onChange={onChangeInput} value={title} />
				</div>
				<div>
					<p>지역</p>
					<DropDown<typeof postValue>
						dropdownTarget="area"
						options={dropDownTable.AreaOptions}
						filterObj={postValue}
						setFilterObj={setPostValue}
					/>
				</div>
				<div>
					<p>카테고리</p>
					<DropDown<typeof postValue>
						dropdownTarget="category"
						options={dropDownTable.CategoryOptions}
						filterObj={postValue}
						setFilterObj={setPostValue}
					/>
				</div>
				<div>
					<p>가격</p>
					<input type="number" name="price" placeholder="가격을 입력해주세요" onChange={onChangeInput} value={price} />
				</div>
				<div className="contentDiv">
					<p>내용</p>
					<textarea name="content" placeholder="내용을 입력해주세요" onChange={onChangeTextArea} value={content} />
				</div>
				<button
					onClick={() => {
						const result = window.confirm('등록하시겠습니까?');
						if (result) {
							onAdd();
						}
						return;
					}}
					disabled={!validatePost}
				>
					게시글 {editPostValue ? '수정' : '작성'}하기
				</button>
			</PostAddWrap>
		</Layout>
	);
};

export default AddPost;
