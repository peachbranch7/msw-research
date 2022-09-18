import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { UserList } from '../../components/UserList';

export default {
  title: 'UserList',
  component: UserList,
} as ComponentMeta<typeof UserList>;

export const Default: ComponentStoryObj<typeof UserList> = {
  args: {
    user: {
      id: 1,
      name: 'james',
      age: 24,
    },
  },
};
