import { fetchPostList, extractPostListByKeyword } from '../core/apis/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';

type Props = {
	area: string;
	category: string;
};

const usePostList = (searchKeyword: string, postFilterObj: Props) => {
	const getPosts = async (pageParam: number) => {
		if (searchKeyword !== '') {
			const payload = await extractPostListByKeyword(searchKeyword, pageParam);
			const data = payload.list.content;
			const last = payload.pageable.last;
			return { data, nextPage: pageParam + 1, last };
		} else {
			const res = await fetchPostList(postFilterObj.category, postFilterObj.area, pageParam);
			const data = res.list.content;
			const last = res.pageable.last;
			return { data, nextPage: pageParam + 1, last };
		}
	};

	const {
		data: postListData,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		[queryKeys.postList, postFilterObj.category, postFilterObj.area],
		({ pageParam = 0 }) => getPosts(pageParam),
		{
			getNextPageParam: (lastPage) => (!lastPage.last ? lastPage.nextPage : undefined),
		},
	);

	return { postListData, fetchNextPage, isFetchingNextPage };
};

export default usePostList;
