import { rest } from 'msw';
import getUsersHandler from './user/getUsersHandler';
import registerUserHandler from './user/registerUserHandler';

export const handlers = [
  rest.get(`/api/users`, getUsersHandler),

  rest.post(`/api/register-user`, registerUserHandler),
];
