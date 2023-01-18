import React, { SetStateAction, useRef } from 'react';

type Props = {
	setSearchKeyword: React.Dispatch<SetStateAction<string>>;
};

const SearchInput = (props: Props) => {
	const searchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const handleSearchByKeyword = (keyword: string) => {
		props.setSearchKeyword(keyword);
	};

	const handleSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleSearchByKeyword(searchInputRef?.current?.value);
	};

	return (
		<form onSubmit={handleSearchFormSubmit}>
			<input ref={searchInputRef} placeholder="검색어를 입력하세요." />
			<button type="submit">검색</button>
		</form>
	);
};

export default SearchInput;
