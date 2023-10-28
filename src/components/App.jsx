import { Routes, Route } from "react-router-dom";
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Reviews } from "./Reviews/Reviews";
import { Creadits } from "./Creadits/Creadits";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Creadits />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
