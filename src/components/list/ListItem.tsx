import { useAtom } from 'jotai';
import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import GithubUser from '../../models/githubUser.model';
import { userSelectedAtom } from '../../store/store';
interface Props {
  user: GithubUser;
}

function ListItem({ user }: Props) {
  const [, setSelectedUser] = useAtom(userSelectedAtom);

  function handleSelectItem(user: GithubUser) {
    setSelectedUser(user);
  }

  return (
    <div className="w-full max-w-sm bg-[#EDF2F4] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-2 max-h-full overflow-hidden">
      <div className="flex justify-end px-4 pt-4" />
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={user.avatar_url}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.login}</h5>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#8D99AE] rounded-lg"
            to="/user"
            onClick={() => handleSelectItem(user)}
          >
            View profile
          </Link>
          <a
            className="inline-flex items-center gap-2 py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 "
            href={user.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoGithub className="text-2xl" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
