import { useAtom } from 'jotai';
import toast from 'react-hot-toast';
import { useEffect, useCallback } from 'react';

import { getGithubUser } from '../api';
import { searchParam, itemsAtom, totalResultsAtom, pageAtom } from '../store/store';

const UseGithubUsers = () => {
  const [searchQuery] = useAtom(searchParam);
  const [items, setItems] = useAtom(itemsAtom);
  const [totalResults, setTotalResult] = useAtom(totalResultsAtom);
  const [page] = useAtom(pageAtom);

  const searchUsers = useCallback(
    async function () {
      try {
        if (searchQuery.length <= 0) {
          toast.error('Aun no has ingresado ninguna busqueda');
        }

        const response = await getGithubUser(searchQuery, page + '');

        setItems(response?.items);
        setTotalResult(response?.total_count);
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
  };
};

export default UseGithubUsers;
