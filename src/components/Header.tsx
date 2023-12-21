import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import IMAGES from '../images/Images';

export const Header: React.FC = () => {
    return (
        <header className="top-0 left-0 w-full rounded-t text-white py-4 flex items-center justify-between border-b-2 border-double border-b-orange-400">
            <div className="logo pl-6 text-2xl md:text-4xl font-black tracking-widest">
                <a href="#top" className="nav-link text-white font-semibold">
                    <img
                        src={IMAGES.logoLightTransparent}
                        alt="Tony's Function Junction"
                        className="w-36 md:w-56"
                    />
                </a>
            </div>
            <Nav />
        </header>
    );
};
