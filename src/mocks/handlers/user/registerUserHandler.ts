import { ResponseResolver, MockedRequest, restContext } from 'msw';
import users from './data.json';

const registerUserHandler: ResponseResolver<MockedRequest, typeof restContext> =
  async (req, res, ctx) => {
    const { id, name, age } = await req.json();

    if (users.find((user) => user.name === name)) {
      return res(
        ctx.status(409),
        ctx.json({
          errorMessage: `${name}は既に登録されています。`,
        })
      );
    }

    return res(
      ctx.status(201),
      ctx.json({
        id,
        name,
        age: Number(age),
      })
    );
  };

export default registerUserHandler;
