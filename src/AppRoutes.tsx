import { Routes, Route } from 'react-router-dom';
// import Movie from './components/Movie';
import Home from './components/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home2 from './components/Home2';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home2" element={<Home2 />} />
                {/* <Route path="genres" element={<Genres />} />
                <Route path="person/:id" element={<PersonDetails />} />
                <Route path="movie/:id" element={<MovieDetails />} />
                <Route
                    path="upcoming"
                    element={<Movies criteria={'upcoming'} />}
                />
                <Route path="latest" element={<Movies criteria={'latest'} />} />
                <Route path="movie/:id" element={<MovieDetails />} />
                <Route path="health" element={<Health />} /> */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
