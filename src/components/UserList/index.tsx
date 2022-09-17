import { FC } from 'react';

export type User = {
  id: number;
  name: string;
  age: number;
};

type Props = {
  user: User;
};

export const UserList: FC<Props> = (props) => {
  const { user } = props;
  return (
    <ul key={user.id}>
      <li>id: {user.id}</li>
      <li>name: {user.name}</li>
      <li>age: {user.age}</li>
    </ul>
  );
};
