import { GiHumanTarget } from 'react-icons/gi';

import UseGithubUsers from '../../hooks/UseGithubUsers';

import ListItem from './ListItem';

function List() {
  const { items } = UseGithubUsers();

  return (
    <div className="h-full w-full py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 place-content-center items-center">
      {items !== undefined && items.map((user) => <ListItem key={user.login} user={user} />)}
      {items !== undefined && (
        <div className="w-full h-full gap-2 max-w-sm bg-[#EDF2F4] rounded-lg border border-gray-200 shadow-md text-zinc-700 p-2 max-h-full overflow-hidden flex items-center justify-center">
          <GiHumanTarget className="text-4xl" /> CARGAR MAS
        </div>
      )}
    </div>
  );
}

export default List;
