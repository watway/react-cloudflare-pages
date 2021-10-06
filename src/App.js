import { useEffect, useState } from 'react';
import Users from './Users';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('fetching data');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.log);
  }, []);

  return <Users users={users} />;
}

export default App;
