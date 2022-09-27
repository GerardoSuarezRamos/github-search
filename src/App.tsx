import useSWR from 'swr';

import logo from './logo.svg';
import './App.css';
import { getGithubUser } from './api';

function App() {
  const { data, isValidating } = useSWR(
    'api/github',
    async () => await getGithubUser('gerardo', '4'),
  );

  console.log(data, isValidating);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
