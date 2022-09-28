import { useAtom } from 'jotai';
import { useEffect, useCallback, useState } from 'react';

import { getGithubUser } from '../api';
import { searchParam, itemsAtom, totalResultsAtom, pageAtom } from '../store/store';

const UseGithubUsers = () => {
  const [searchQuery] = useAtom(searchParam);
  const [items, setItems] = useAtom(itemsAtom);
  const [totalResults, setTotalResult] = useAtom(totalResultsAtom);
  const [page] = useAtom(pageAtom);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const searchUsers = useCallback(
    async function () {
      setIsloading(true);
      try {
        if (searchQuery === '') return;

        const response = await getGithubUser(searchQuery, page + '');

        setItems(response?.items);
        setTotalResult(response?.total_count);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    },
    [searchQuery, setItems, setTotalResult, page],
  );

  useEffect(() => {
    searchUsers();
  }, [searchUsers]);

  return {
    items,
    totalResults,
    isLoading,
  };
};

export default UseGithubUsers;
