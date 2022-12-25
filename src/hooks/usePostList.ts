import { fetchPostList, extractPostListByKeyword } from '../core/apis/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys';

type Props = {
	area: string;
	category: string;
};

const usePostList = (searchKeyword: string, postFilterObj: Props) => {
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
	} = useInfiniteQuery(
		[queryKeys.postList, postFilterObj.area, postFilterObj.category, searchKeyword],
		({ pageParam = 0 }) => getPosts(pageParam),
		{
			getNextPageParam: (postListData) => (!postListData.last ? postListData.nextPage : undefined),
		},
	);

	return { postListData, fetchNextPage, isFetchingNextPage };
};

export default usePostList;
