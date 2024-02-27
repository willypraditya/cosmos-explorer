import { Message } from 'types/common';

import getClient from './client';

const client = getClient();

// Sample Fetching
const getTest = async (): Promise<Message> => {
  const response = await client.get('url-here');
  return response.data;
};

export default getTest;
