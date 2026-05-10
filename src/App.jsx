import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from "./components/Layout";
import HomePage from './pages/HomePage';
import HistoirePage from './pages/HistoirePage';
import ChronologiePage from './pages/ChronologiePage';
import GeneralogiePage from './pages/GeneralogiePage';
import HeraldiquePage from './pages/HeraldiquePage';
import ChateauPage from './pages/ChateauPage';
import ArchivesPage from './pages/ArchivesPage';
import BranchesPage from './pages/BranchesPage';
import CartePage from './pages/CartePage';
import AncetresPage from './pages/AncetresPage';
import AncetreDetailPage from './pages/AncetreDetailPage';
import RecherchePage from './pages/RecherchePage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="histoire" element={<HistoirePage />} />
          <Route path="chronologie" element={<ChronologiePage />} />
          <Route path="genealogie" element={<GeneralogiePage />} />
          <Route path="heraldique" element={<HeraldiquePage />} />
          <Route path="chateau-ordre" element={<ChateauPage />} />
          <Route path="archives" element={<ArchivesPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="carte" element={<CartePage />} />
          <Route path="ancetres" element={<AncetresPage />} />
          <Route path="ancetres/:slug" element={<AncetreDetailPage />} />
          <Route path="recherche" element={<RecherchePage />} />
          <Route path="administration" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
