import React, { useRef } from 'react';

type Props = {
	setSearchKeyword: (searchKeyword: string) => void;
};

const SearchInput = (props: Props) => {
	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.setSearchKeyword(searchInputRef?.current?.value!);
	};

	return (
		<form onSubmit={handleSearchFormSubmit}>
			<input ref={searchInputRef} placeholder="검색어를 입력하세요." />
			<button type="submit">검색</button>
		</form>
	);
};

export default SearchInput;
