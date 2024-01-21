import React from 'react';
import useFetch from './useFetch';

export default function Main11() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [users] = useFetch(url);

  return (
    <div>
        <h1>User List</h1>
        {users && users.map((user) => 
            (<div key={user.id}>{user.name}</div>)
        )}
    </div>
  );
}
