import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';

import { getRepoUsers } from '../api';
import GithubRepository from '../models/githubRepo.model';
import { userSelectedAtom } from '../store/store';

function UserScreen() {
  const [userSelected] = useAtom(userSelectedAtom);
  const [reposUser, setReposUser] = useState<GithubRepository[] | undefined>(undefined);

  const getRepos = useCallback(async () => {
    try {
      const response = await getRepoUsers(
        (userSelected?.repos_url && userSelected?.repos_url) || '',
      );

      setReposUser(response);
    } catch (e) {
      console.log(e);
    }
  }, [userSelected?.repos_url]);

  useEffect(() => {
    getRepos();
  }, [userSelected, getRepos]);

  return (
    <main className="h-full w-full flex flex-col items-center justify-center pt-12">
      <div className="inline-flex justify-center items-center gap-14 w-full">
        <img
          alt="Bonnie image"
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={(userSelected && userSelected.avatar_url) || ''}
        />
        <h5 className="mb-1 text-xl font-medium text-white">
          {userSelected && userSelected.login}
        </h5>
        <div className="flex flex-col items-center">
          <span>{reposUser && reposUser.length}</span>
          <span>Repositorios</span>
        </div>
      </div>
      <ul className="space-y-2">
        {reposUser &&
          reposUser.map((repo) => (
            <li key={repo.id} className="flex flex-row items-center gap-4 justify-between">
              <a href={repo.html_url}>{repo.name}</a>
              <div className="inline-flex gap-2 items-center">
                <BsStars className="text-yellow-500 text-2xl" />{' '}
                <span>{repo.stargazers_count}</span>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default UserScreen;
