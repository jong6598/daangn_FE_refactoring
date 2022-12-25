import { useInfiniteQuery } from '@tanstack/react-query';

import { queryKeys } from '@src/constants/queryKeys';
import { fetchPostList, extractPostListByKeyword } from '@src/core/apis/post';

type Props = {
	area: string;
	category: string;
};

const usePostList = (postFilterObj: Props, searchKeyword: string) => {
	const getPosts = async (pageParam: number) => {
		if (searchKeyword === '') {
			const payload = await fetchPostList(postFilterObj.category, postFilterObj.area, pageParam);
			const data = payload.list.content;
			const last = payload.list.last;
			return { data, last, nextPage: pageParam + 1 };
		} else {
			const payload = await extractPostListByKeyword(searchKeyword, pageParam);
			const data = payload.list.content;
			const last = payload.list.last;
			return { data, last, nextPage: pageParam + 1 };
		}
	};

	const {
		data: postListData,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery(
		[queryKeys.postList, postFilterObj.category, postFilterObj.area, searchKeyword],
		({ pageParam = 0 }) => getPosts(pageParam),
		{
			getNextPageParam: (postListData) => (!postListData.last ? postListData.nextPage : undefined),
		},
	);

	return { postListData, fetchNextPage, isFetchingNextPage, hasNextPage };
};

export default usePostList;
