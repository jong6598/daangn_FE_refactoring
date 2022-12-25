import { useEffect, useState, ComponentProps } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import DropDown from '../../components/shared/DropDown';
import { dropDownTable } from '../../constants/dropDown';
import useAddPost from '../../hooks/useAddPost';
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
	const navigate = useNavigate();
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
	const onAdd = useAddPost({ isEditingMode, postValue, postId });
	const [validatePost, setValidatePost] = useState(false);

	const onChangeInput: ComponentProps<'input'>['onChange'] = (e) => {
		setPostValue({
			...postValue,
			[e.target.name]: e.target.value,
		});
	};

	const onChangeTextArea: ComponentProps<'textarea'>['onChange'] = (e) => {
		setPostValue({
			...postValue,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (editPostValue) {
			setPostValue(editPostValue);
			setIsEditingMode(true);
		}
	}, []);

	useEffect(() => {
		if (
			postValue.area !== 'ALL' &&
			postValue.category !== 'ALL' &&
			postValue.content !== '' &&
			postValue.title !== '' &&
			postValue.price !== 0
		) {
			setValidatePost(true);
		}
	}, [postValue]);

	const handleDropdownFilterChange = (value: string, changeTarget: string) => {
		setPostValue({ ...postValue, [changeTarget]: value });
	};

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
					<DropDown dropdownTarget="area" options={dropDownTable.AreaOptions} onDropdownChange={handleDropdownFilterChange} />
				</div>
				<div>
					<p>카테고리</p>
					<DropDown
						dropdownTarget="category"
						options={dropDownTable.CategoryOptions}
						onDropdownChange={handleDropdownFilterChange}
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
						} else {
							navigate(-1);
						}
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
