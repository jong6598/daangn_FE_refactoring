import { getPostList, getPostListByKeyword } from '../core/apis/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';

type Props = {
	area: string;
	category: string;
};

const usePost = (searchKeyword: string, postFilterObj: Props) => {
	const getPosts = async (pageParam: number) => {
		if (searchKeyword !== '') {
			const payload = await getPostListByKeyword(searchKeyword, pageParam);
			const data = payload.list.content;
			const last = payload.last;
			return { data, nextPage: pageParam + 1, last };
		} else {
			const res = await getPostList(postFilterObj.category, postFilterObj.area, pageParam);
			const data = res.list.content;
			const last = res.last;
			return { data, nextPage: pageParam + 1, last };
		}
	};

	const {
		data: postListData,
		fetchNextPage,
		isFetchingNextPage,
		refetch,
	} = useInfiniteQuery(
		[queryKeys.postList, postFilterObj.category, postFilterObj.area],
		({ pageParam = 0 }) => getPosts(pageParam),
		{
			getNextPageParam: (lastPage) => (!lastPage.last ? lastPage.nextPage : undefined),
		},
	);

	return { postListData, fetchNextPage, isFetchingNextPage, refetch };
};

export default usePost;
