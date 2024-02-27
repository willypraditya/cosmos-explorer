// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}test`, (req, res, ctx) => res(ctx.status(200), ctx.json('Test Success'))),
];

export default handlers;
