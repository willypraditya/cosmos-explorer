import { Route, Routes } from 'react-router-dom';

import Blocks from '@pages/Blocks';
import Home from '@pages/Home';
import Proposals from '@pages/Proposals';
import Validators from '@pages/Validators';

import Layout from '@components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/validators" element={<Validators />} />
        <Route path="/proposals" element={<Proposals />} />
      </Route>
    </Routes>
  );
};

export default App;
