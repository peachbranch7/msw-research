import { ResponseResolver, MockedRequest, restContext } from 'msw';
import users from '../../data/users.json';

const getUsers: ResponseResolver<MockedRequest, typeof restContext> = (
  _,
  res,
  ctx
) => {
  return res(ctx.json(users));
};

export default getUsers;
