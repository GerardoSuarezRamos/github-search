import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

import { userSelectedAtom } from '../store/store';

function UserScreen() {
  const [userSelected] = useAtom(userSelectedAtom);

  useEffect(() => {
    console.log(userSelected);
  }, [userSelected]);

  return (
    <main className="h-screen w-screen">
      <h3>{JSON.stringify(userSelected)}</h3>
    </main>
  );
}

export default UserScreen;
