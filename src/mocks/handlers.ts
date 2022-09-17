import { rest } from 'msw';
import getUsers from './resolvers/User/getUsers';
import registerUser from './resolvers/User/registerUser';

export const handlers = [
  rest.get(`/api/users`, getUsers),

  rest.post(`/api/register-user`, registerUser),
  // rest.get('/api/users', (_, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(users));
  // }),

  // rest.post<ReqBody, ResBody>('/api/register-user', async (req, res, ctx) => {
  //   const { id, name, age } = await req.json();

  //   if (users.find((user) => user.name === name)) {
  //     return res(
  //       ctx.status(409),
  //       ctx.json({
  //         errorMessage: `${name}は既に登録されています。`,
  //       })
  //     );
  //   }

  //   return res(
  //     ctx.status(201),
  //     ctx.json({
  //       id,
  //       name,
  //       age: Number(age),
  //     })
  //   );
  // }),
];
