import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { UserList, User } from '../../components/UserList';

export default {
  title: 'UserList',
  component: UserList,
} as ComponentMeta<typeof UserList>;

const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  const getUsers = async () => {
    const response = await fetch(`/api/users`);
    if (!response.ok) {
      alert('bad request');
    } else {
      setUsers(await response.json());
    }
  };
  getUsers();
}, []);

export const Default: ComponentStoryObj<typeof UserList> = {
  args: {
    user: users[0],
  },
};
