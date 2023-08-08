import { useEffect, useState } from 'react';
import { MovieDetails as MovieDetailType } from '../types/interfaces';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
    const [movieData, setMovieData] = useState<MovieDetailType | null>(null);
    const { id } = useParams<{ id: string }>();
    const API_URL = `http://localhost:3000/movie/${id}`;

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(
                        'Request failed with status ' + response.status,
                    );
                }
                const data: MovieDetailType = await response.json();
                setMovieData(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieData();
    }, [API_URL]);

    function formatRuntime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    }

    function formatCurrency(value: number): string {
        const million = 1000000;
        return `$${(value / million).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })}M`;
    }

    return (
        <div className="bg-gray-200 p-5">
            {movieData ? (
                <>
                    <div>
                        <div className="md:flex ">
                            {movieData.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
                                    className="w-auto h-96 object-cover rounded-lg"
                                    alt={movieData.title}
                                />
                            )}
                            <div className="flex bg-gray-100 flex-col p-4">
                                <h2 className="text-2xl font-bold">
                                    {movieData.title}
                                </h2>
                                <div className="flex items-center mb-4 text-xs">
                                    <p className="mr-2">
                                        {new Date(
                                            movieData.release_date,
                                        ).toLocaleDateString('en-GB')}
                                    </p>
                                    <span className="mr-2">&#8226;</span>
                                    <p className="mr-2">
                                        {' '}
                                        {movieData.genres
                                            .map((genre) => genre.name)
                                            .join(', ')}
                                    </p>
                                    <span className="mr-2">&#8226;</span>
                                    <p> {formatRuntime(movieData.runtime)}</p>
                                </div>
                                <p className="text-sm italic pb-2">
                                    {movieData.tagline}
                                </p>
                                <p className="text-base font-bold">Overview</p>
                                <p className="text-sm pb-4">
                                    {movieData.overview}
                                </p>
                                <div className="flex items-center text-sm mb-4">
                                    <p className="mr-2">
                                        Budget:{' '}
                                        {formatCurrency(movieData.budget)}
                                    </p>
                                    <span className="mr-2">&#8226;</span>
                                    <p>
                                        Revenue:{' '}
                                        {formatCurrency(movieData.revenue)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetails;