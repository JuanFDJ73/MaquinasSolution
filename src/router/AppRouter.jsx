import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import MachineDetail from '../pages/MachineDetail';
import CategoryDetail from '../pages/CategoryDetail';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maquinas/:machineId" element={<MachineDetail />} />
          <Route path="/maquinas/:machineId/:categoryId" element={<CategoryDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
