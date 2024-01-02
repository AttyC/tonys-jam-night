const Nav = () => {
    return (
        <nav className="md:pr-6">
            <ul className="flex text-sm md:text-lg uppercase tracking-wide">
                <li className="mx-4 hidden md:block">
                    <a href="/" className="nav-link text-white font-semibold">
                        Home
                    </a>
                </li>{' '}
                <li className="mr-4 md:mx-4">
                    <a
                        href="#showcase"
                        className="nav-link text-white font-semibold"
                    >
                        Showcase
                    </a>
                </li>
                <li className="mr-4 md:mx-4">
                    <a
                        href="#jam"
                        className="nav-link text-white font-semibold"
                    >
                        Jam
                    </a>
                </li>
                <li className="mr-4 md:mx-4">
                    <a
                        href="#contact"
                        className="nav-link text-white font-semibold"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
