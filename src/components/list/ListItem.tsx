import { IoLogoGithub } from 'react-icons/io5';

import GithubUser from '../../models/githubUser.model';
interface Props {
  user: GithubUser;
}

function ListItem({ user }: Props) {
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
          <a
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#8D99AE] rounded-lg"
            href={user.html_url}
          >
            View profile
          </a>
          <a
            className="inline-flex items-center gap-2 py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 "
            href={user.html_url}
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
