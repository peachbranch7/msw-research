import { ResponseResolver, MockedRequest, restContext } from 'msw';
import users from './data.json';

const getUsersHandler: ResponseResolver<MockedRequest, typeof restContext> = (
  _,
  res,
  ctx
) => {
  return res(ctx.json(users));
};

export default getUsersHandler;
