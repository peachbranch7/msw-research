import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';
import getUsers from '../src/mocks/handlers/user/getUsersHandler';
import registerUser from '../src/mocks/handlers/user/registerUserHandler';
import { setupWorker } from 'msw';

// Node 環境ではなくブラウザ環境にいることをチェック
if (typeof global.process === 'undefined') {
  // MSW をセットアップ
  const worker = setupWorker();
  // Service Worker を立ち上げる
  worker.start();
  // stories ファイルからアクセスできるように、worker をグローバルに参照できるようにする
  window.msw = { worker };
}

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
