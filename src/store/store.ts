import { atom } from 'jotai';

import GithubUser from '../models/githubUser.model';

const itemsAtom = atom<GithubUser[] | undefined>([]);
const totalResultsAtom = atom<number | undefined>(0);
const pageAtom = atom<number>(1);
const searchParamAtom = atom<string>('');
const isInitSearchAtom = atom<boolean>(false);

export { itemsAtom, totalResultsAtom, pageAtom, searchParamAtom, isInitSearchAtom };
