import Nav from './Nav';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-700 py-8 text-white font-semibold flex flex-col items-center">
            <p className="pb-4">Created by Atty C 2024</p>
            <Nav />
        </footer>
    );
};
