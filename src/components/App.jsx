import { Route, Routes } from 'react-router-dom';
import { Movie } from 'pages/Movie';
import { Home } from 'pages/Home';
import { Header } from './Header';

import { SelectedMovie } from 'pages/SelectedMovie';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<SelectedMovie />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

// COMPONENTS SELECTED MOVIES

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { GetByID } from 'API';

// export const SelectedMovie = () => {
//   const { id } = useParams();
//   const [movieData, setMovieData] = useState({});

//   useEffect(() => {
//     GetByID(id).then(r => setMovieData(r));
//   }, [id]);
//   return (
//     <div>
//       <div>
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
//           alt=""
//         />
//         <h1>{movieData.title}</h1>
//       </div>
//     </div>
//   );
// };

// COMPONENT HEADER

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export const Header = () => {
//   return (
//     <header>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/movie">Movie</NavLink>
//     </header>
//   );
// };

//  PAGE HOME

// import { Trend } from 'components/Trend';

// export const Home = () => {
//   return <Trend />;
// };

// COMPONENT TREND

// import { useState, useEffect } from 'react';
// import { GetTrends } from 'API';
// import { Link } from 'react-router-dom';

// export const Trend = () => {
//   const [movieList, setMovieList] = useState([]);

//   useEffect(() => {
//     GetTrends().then(r => setMovieList(r));
//   }, []);

//   return (
//     <>
//       <h1>Trending Today</h1>
//       <ul>
//         {movieList.map(({ id, title }) => (
//           <li key={id}>
//             <Link to={`/movie/${id}`}>{title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
