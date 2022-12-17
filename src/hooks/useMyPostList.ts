import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';
import { fetchMyPostList } from '../core/apis/post';

const useMyPostList = (filter: string) => {
	const getMyPostList = async (pageParam: number) => {
		const payload = await fetchMyPostList(filter, pageParam);
		let data = payload.list.content;
		let last = payload.pageable.last;
		return { data, last, nextPage: pageParam + 1 };
	};

	const {
		data: myPostListData,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery([queryKeys.myPostList, filter], ({ pageParam = 0 }) => getMyPostList(pageParam), {
		getNextPageParam: (LastPage) => (!LastPage.last ? LastPage.nextPage : undefined),
	});

	return { myPostListData, fetchNextPage, isFetchingNextPage };
};

export default useMyPostList;
