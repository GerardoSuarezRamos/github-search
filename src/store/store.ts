import { atom } from 'jotai';

import GithubUser from '../models/githubUser.model';

const githubUsersAtom = atom<GithubUser[] | undefined>([]);
const userSelectedAtom = atom<GithubUser | null>(null);
const totalResultsAtom = atom<number | undefined>(0);
const pageAtom = atom<number>(1);
const searchParamAtom = atom<string>('');
const isInitSearchAtom = atom<boolean>(false);

export {
  githubUsersAtom,
  totalResultsAtom,
  pageAtom,
  searchParamAtom,
  isInitSearchAtom,
  userSelectedAtom,
};
