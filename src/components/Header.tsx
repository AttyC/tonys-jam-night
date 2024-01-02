import React from 'react';
import Nav from './Nav';

export const Header: React.FC = () => {
    return (
        <header className="top-0 left-0 w-full rounded-t text-white py-4 flex items-center justify-around md:justify-between border-b-2 border-double border-b-orange-400">
            <div className="logo pl-6 text-lg md:text-4xl font-black tracking-widest">
                <a
                    href="#top"
                    className=" text-white font-semibold flex align-middle hover:no-underline hover:border-orange-400 border-2 rounded-full"
                >
                    <span className="font-nineteeneighty text-center bg-white border-2 rounded-full border-emerald-50 p-2">
                        🎶
                    </span>
                </a>
            </div>
            <Nav />
        </header>
    );
};
