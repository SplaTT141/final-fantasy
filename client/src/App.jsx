import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { NotFoundPage } from './pages/public/NotFound';
import { CategoriesPage } from './pages/public/Categories';
import { MoviesPage } from './pages/public/Movies';
import { CategoryInnerPage } from './pages/public/CategoryInner';
import { MovieInner } from './pages/public/MovieInner';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movie" element={<MovieInner />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoryInnerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}