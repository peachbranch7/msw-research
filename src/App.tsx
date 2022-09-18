import { useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import './App.css';
import { UserForm } from './components/UserForm';

type User = {
  id: number;
  name: string;
  age: number;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = async () => {
    var id = Math.floor(Math.random() * 100);
    const response = await fetch('/api/register-user', {
      method: 'POST',
      body: JSON.stringify({
        id,
        name,
        age,
      }),
    });
    const registeredUser = await response.json();
    setUsers([...users, registeredUser]);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users`);

      if (!response.ok) {
        alert('bad request');
      } else {
        setUsers(await response.json());
      }
    })();
  }, []);

  if (!users?.length) return <p>no data...</p>;

  return (
    <div className='App'>
      {users?.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
      <UserForm
        name={name}
        age={age}
        onSubmit={handleSubmit}
        onChangeName={setName}
        onChangeAge={setAge}
      />
    </div>
  );
}

export default App;
