import React, { useRef } from 'react';

type Props = {
	onSearchByKeyword: (keyword: string) => void;
};

const SearchInput = (props: Props) => {
	const searchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const handleSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onSearchByKeyword(searchInputRef?.current?.value);
	};

	return (
		<form onSubmit={handleSearchFormSubmit}>
			<input ref={searchInputRef} placeholder="검색어를 입력하세요." />
			<button type="submit">검색</button>
		</form>
	);
};

export default SearchInput;
