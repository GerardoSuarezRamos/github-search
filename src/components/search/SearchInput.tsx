import { useState, ChangeEvent } from 'react';
import { toast } from 'react-hot-toast';
import { IoLogoGithub } from 'react-icons/io5';

import { getGithubUser } from '../../api';
import GithubUser from '../../models/githubUser.model';

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [items, setItems] = useState<GithubUser[] | undefined>(undefined);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearchQuery(value);
  }

  async function handleClickSearch() {
    try {
      if (searchQuery.length <= 0) {
        toast.error('Aun no has ingresado ninguna busqueda');
      }
      const response = await getGithubUser(searchQuery, '1');

      setItems(response?.items);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h4 className="text-xl font-bold inline-flex gap-4">
        <IoLogoGithub className="text-3xl md:text-6xl" />
        <span className="self-end md:text-3xl text-xl">Github Search Engine</span>
      </h4>
      <div className="inline-flex items-center w-full justify-center">
        <input
          required
          className="p-2 rounded-xl shadow-md shadow-zinc-500 outline-none font-bold text-zinc-600 w-11/12 md:w-3/5 "
          id="search-dropdown"
          placeholder="Search"
          type="search"
          onChange={handleChangeInput}
        />
        <button
          className="relative right-3 p-2.5 text-sm font-medium text-white shadow-zinc-500 bg-[#8D99AE] rounded-r-lg  focus:ring-4 focus:outline-none focus:ring-[#8D99AE]"
          type="submit"
          onClick={handleClickSearch}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
