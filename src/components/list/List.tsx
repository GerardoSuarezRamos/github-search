import { GiHumanTarget } from 'react-icons/gi';
import { useAtom } from 'jotai';
import { PacmanLoader } from 'react-spinners';

import { isInitSearchAtom, pageAtom } from '../../store/store';
import UseGithubUsers from '../../hooks/UseGithubUsers';

import ListItem from './ListItem';

function List() {
  const [, setPage] = useAtom(pageAtom);
  const [, setIsInitSearch] = useAtom(isInitSearchAtom);
  const { items, isLoading } = UseGithubUsers();

  function handleClickLoadMore() {
    setPage((prevState) => prevState + 1);
    setIsInitSearch(true);
  }

  return (
    <>
      {isLoading && (
        <div className="h-full w-full m-auto inline-flex items-center justify-center my-24">
          <PacmanLoader color="#D90429" size={100} />
        </div>
      )}
      <div className="h-full w-full py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 place-content-center items-center">
        {!isLoading &&
          items !== undefined &&
          items.map((user) => <ListItem key={user.login} user={user} />)}
        {!isLoading && items !== undefined && items.length > 0 && (
          <div
            className="w-full h-full gap-2 max-w-sm bg-[#EDF2F4] rounded-lg border border-gray-200 shadow-md text-zinc-700 p-2 max-h-full overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={handleClickLoadMore}
          >
            <GiHumanTarget className="text-4xl" /> CARGAR MAS
          </div>
        )}
      </div>
    </>
  );
}

export default List;
