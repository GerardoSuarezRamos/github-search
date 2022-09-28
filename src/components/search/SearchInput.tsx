import { ChangeEvent } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { FcBusinessman, FcSearch } from 'react-icons/fc';
import { useAtom } from 'jotai';

import { isInitSearchAtom, searchParamAtom } from '../../store/store';
import UseGithubUsers from '../../hooks/UseGithubUsers';

function SearchInput() {
  const [, setSearchQuery] = useAtom(searchParamAtom);
  const [, setIsInitSearch] = useAtom(isInitSearchAtom);

  const { items, totalResults } = UseGithubUsers();

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearchQuery(value);
  }

  function handleClickSearch() {
    setIsInitSearch(true);
  }

  return (
    <div
      className={`${
        (items === undefined || items.length === 0) && 'h-screen'
      } w-screen flex flex-col items-center justify-center space-y-4 transition-all duration-700 pt-4`}
    >
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
          type="text"
          onChange={handleChangeInput}
        />
        <button
          className="relative right-2 bg-[#8D99AE] py-3 px-2 rounded-r-xl"
          onClick={handleClickSearch}
        >
          <FcSearch />
        </button>
      </div>
      <div className="inline-flex">
        <span className="text-sm font-medium text-end self-end">
          Se han encontrado: {totalResults || '0'} resultados
        </span>
        <FcBusinessman className="text-2xl" />
      </div>
    </div>
  );
}

export default SearchInput;
