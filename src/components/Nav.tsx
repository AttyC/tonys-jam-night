import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="pr-6">
            <ul className="sm:flex sm:space-x-6 text-xl">
                <li>
                    <a href="#top" className="nav-link text-white">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#jam" className="nav-link text-white">
                        The Jam
                    </a>
                </li>
                <li>
                    <a href="#faq" className="nav-link text-white">
                        FAQs
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
