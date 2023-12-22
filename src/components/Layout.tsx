import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="font-varelaround text-md md:text-lg">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
