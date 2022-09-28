import toast from 'react-hot-toast';

import GithubRepository from '../models/githubRepo.model';
import GithubUser from '../models/githubUser.model';

interface ResponseGithubSearchUsers {
  incomplete_results: boolean;
  items: GithubUser[];
  total_count: number;
}

const getGithubUser = async (
  query: string,
  page: string,
): Promise<ResponseGithubSearchUsers | undefined> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/search/users?q=${query}&per_page=50&page=${page}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
        },
      },
    );
    const data = await response.json();

    return data;
  } catch (error) {
    toast.error('Oops! parece que ha ocurrido un error');
  }
};

const getRepoUsers = async (urlRepos: string): Promise<GithubRepository[] | undefined> => {
  try {
    const response = await fetch(`${urlRepos}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    toast.error('Oops! parece que ha ocurrido un error');
  }
};

export { getGithubUser, getRepoUsers };
