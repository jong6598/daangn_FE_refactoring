import { useInfiniteQuery } from '@tanstack/react-query';

import { queryKeys } from '@src/constants/queryKeys';
import { fetchMyPostList } from '@src/core/apis/post';

const useMyPostList = (filter: string) => {
	const getMyPostList = async (pageParam: number) => {
		const payload = await fetchMyPostList(filter, pageParam);
		const data = payload.list.content;
		const last = payload.list.last;
		return { data, last, nextPage: pageParam + 1 };
	};

	const {
		data: myPostListData,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery([queryKeys.myPostList, filter], ({ pageParam = 0 }) => getMyPostList(pageParam), {
		getNextPageParam: (myPostListData) => (!myPostListData.last ? myPostListData.nextPage : undefined),
		suspense: true,
	});

	return { myPostListData, fetchNextPage, isFetchingNextPage };
};

export default useMyPostList;
