import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { rest } from 'msw';
import { UserList } from '../../components/UserList';
import { handlers } from '../../mocks/handlers';

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

export const SuccessBehavior = () => <UserList />;

SuccessBehavior.parameters = {
  // 正常系は定義済みのhandlersをそのまま利用
  msw: {
    handlers: handlers,
  },
};

export const FailureBehavior = () => <UserList />;

FailureBehavior.parameters = {
  // 異常系はhandlersを上書き
  msw: {
    handlers: [
      rest.get('/api/users', (_, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Internal Server Error' })
        );
      }),
    ],
  },
};
