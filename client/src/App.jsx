import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { NotFound } from './pages/public/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="*" index element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}