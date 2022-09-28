import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';

import { getOrganizationsUsers, getRepoUsers } from '../api';
import { GithubOrganization } from '../models/githubOrganization.model';
import GithubRepository from '../models/githubRepo.model';
import { userSelectedAtom } from '../store/store';

function UserScreen() {
  const [userSelected] = useAtom(userSelectedAtom);
  const [reposUser, setReposUser] = useState<GithubRepository[] | undefined>(undefined);
  const [organizationsUser, setOrganizationsUser] = useState<GithubOrganization[] | undefined>(
    undefined,
  );

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

  const getOrganizations = useCallback(async () => {
    try {
      const response = await getOrganizationsUsers(
        (userSelected?.organizations_url && userSelected?.organizations_url) || '',
      );

      setOrganizationsUser(response);
    } catch (e) {
      console.log(e);
    }
  }, [userSelected?.organizations_url]);

  useEffect(() => {
    getRepos();
    getOrganizations();
  }, [userSelected, getRepos, getOrganizations]);

  return (
    <main className="h-full w-full flex flex-col items-center justify-center pt-12">
      <div className="inline-flex justify-center items-end gap-14 w-full p-4">
        <img
          alt="Bonnie image"
          className="w-24 h-24 rounded-full shadow-xl"
          src={(userSelected && userSelected.avatar_url) || ''}
        />

        <h5 className="mb-1 text-xl font-medium text-white">
          {userSelected && userSelected.login}
        </h5>
        <div className="flex flex-col items-center">
          <span>{reposUser && reposUser.length}</span>
          <span>Repositorios</span>
        </div>
        <div className="flex-col flex items-center">
          <div className="inline-flex gap-2">
            {organizationsUser?.map((organization) => (
              <img
                key={organization?.id}
                alt={organization?.login}
                className="mb-3 w-12 h-12 rounded-full shadow-lg"
                src={organization.avatar_url}
              />
            ))}
          </div>

          <span>Organizations</span>
        </div>
      </div>
      <ul className="space-y-2 w-4/12 mb-4 border-t-2 p-4 border-slate-500">
        {reposUser?.map((repo) => (
          <li key={repo.id} className="flex flex-row items-center gap-4 justify-between">
            <a
              className="text-[#D90429] drop-shadow-lg font-bold text-md"
              href={repo.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {repo.name}s
            </a>
            <div className="inline-flex gap-2 items-center">
              <BsStars className="text-yellow-500 text-2xl" /> <span>{repo.stargazers_count}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserScreen;
