import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import { Reviews } from "./Reviews/Reviews";
// import { Creadits } from "./Creadits/Creadits";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Credits = lazy(() => import('./Credits/Credits'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Credits />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
