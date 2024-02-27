import { render } from '@testing-library/react';

import Home from '@pages/Home';

test('renders Home success', async () => {
  const { findByText } = await render(<Home />);

  expect(await findByText('React Starter Pack')).toBeInTheDocument();
});
