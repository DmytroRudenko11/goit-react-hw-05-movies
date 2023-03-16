import { Route, Routes } from 'react-router-dom';
import { Movie } from 'pages/Movie';
import { Home } from 'pages/Home';

import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Layout } from './Layout';

import { SelectedMovie } from 'pages/SelectedMovie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<SelectedMovie />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
