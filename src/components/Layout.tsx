import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

const Layout = () => {
    return (
        <div className="bg-zinc-900">
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
