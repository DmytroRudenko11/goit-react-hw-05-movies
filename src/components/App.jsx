import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SelectedMovie from 'pages/SelectedMovie';
import { Movie } from 'pages/Movie';
import { Home } from 'pages/Home';
import { Layout } from './Layout';

const SelectedMovie = lazy(() =>
  import('../pages/SelectedMovie/SelectedMovie')
);
const Cast = lazy(() => import('../pages/SelectedMovie/Cast/Cast'));
const Reviews = lazy(() => import('../pages/SelectedMovie/Reviews/Reviews'));

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
      <ToastContainer />
    </div>
  );
};
