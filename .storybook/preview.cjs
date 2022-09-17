import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';
import getUsers from '../src/mocks/resolvers/User/getUsers';
import registerUser from '../src/mocks/resolvers/User/registerUser';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [
      rest.get(`/api/users`, getUsers),
      rest.post(`/api/register-user`, registerUser),
    ],
  },
};

/// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
