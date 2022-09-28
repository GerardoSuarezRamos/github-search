import List from '../components/list/List';
import SearchInput from '../components/search/SearchInput';
function MainScreen() {
  return (
    <main className="min-h-screen min-w-screen overflow-hidden duration-1000 transition-all">
      <SearchInput />
      <List />
    </main>
  );
}

export default MainScreen;
