import React from 'react';
import useSWR from 'swr';

import { getGithubUser } from '../api';

function MainScreen() {
  const { data, isValidating } = useSWR(
    'api/github',
    async () => await getGithubUser('gerardo', '1'),
  );

  console.log(data, isValidating);

  return <div style={{ fontSize: '2rem' }}>mainScreen</div>;
}

export default MainScreen;
