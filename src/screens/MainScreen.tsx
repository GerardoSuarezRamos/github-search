import { useState } from 'react';

import SearchInput from '../components/search/SearchInput';
import List from '../components/list/List';
import GithubUser from '../models/githubUser.model';
function MainScreen() {
  const [listItems, setListItems] = useState<GithubUser[] | undefined>([]);

  return (
    <main className="min-h-screen min-w-screen overflow-hidden">
      <SearchInput getterItems={setListItems} />
      <List items={listItems} />
    </main>
  );
}

export default MainScreen;
