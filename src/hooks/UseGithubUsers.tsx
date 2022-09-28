import { useAtom } from 'jotai';
import { useEffect, useCallback, useState } from 'react';

import { getGithubUser } from '../api';
import {
  searchParamAtom,
  itemsAtom,
  totalResultsAtom,
  pageAtom,
  isInitSearchAtom,
} from '../store/store';

const UseGithubUsers = () => {
  const [searchQuery] = useAtom(searchParamAtom);
  const [items, setItems] = useAtom(itemsAtom);
  const [totalResults, setTotalResult] = useAtom(totalResultsAtom);
  const [page] = useAtom(pageAtom);
  const [isInitSearch, setIsInitSearch] = useAtom(isInitSearchAtom);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const searchUsers = useCallback(
    async function () {
      setIsloading(true);
      try {
        if (searchQuery === '') return;

        const response = await getGithubUser(searchQuery, page + '');

        setItems(response?.items);
        setTotalResult(response?.total_count);
        setIsInitSearch(false);
        setTimeout(() => {
          setIsloading(false);
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    },
    [searchQuery, page, setItems, setIsInitSearch, setTotalResult],
  );

  useEffect(() => {
    if (isInitSearch) {
      searchUsers();
    }
  }, [isInitSearch, searchUsers]);

  return {
    items,
    totalResults,
    isLoading,
  };
};

export default UseGithubUsers;
