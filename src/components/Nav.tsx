const Nav = () => {
    return (
        <nav className="pr-6">
            <ul className="flex text-sm md:text-lg uppercase tracking-wide">
                <li className="mx-4 hidden md:block">
                    <a href="/" className="nav-link text-white font-semibold">
                        Home
                    </a>
                </li>
                <li className="mx-4 md:block">
                    <a
                        href="/home2"
                        className="nav-link text-white font-semibold"
                    >
                        Home 2
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        href="#jam"
                        className="nav-link text-white font-semibold"
                    >
                        Music Jam
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        href="#faqs"
                        className="nav-link text-white font-semibold"
                    >
                        FAQs
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
