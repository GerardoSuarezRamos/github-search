import GithubUser from '../../models/githubUser.model';

import ListItem from './ListItem';

interface Props {
  items: GithubUser[] | undefined;
}

function List({ items }: Props) {
  return (
    <div className="h-full w-full py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 place-content-center items-center">
      {items !== undefined && items.map((user) => <ListItem key={user.login} user={user} />)}
    </div>
  );
}

export default List;
