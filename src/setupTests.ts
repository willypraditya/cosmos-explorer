// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import server from 'mocks/server';

global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
