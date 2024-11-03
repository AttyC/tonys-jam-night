import Stamp from './Stamp';

const Hero = () => {
    return (
        <section className="hero-bg bg-blend-darken border-b-2 border-double border-b-orange-700 w3-animate-opacity">
            {/* <div className=" w3-animate-opacity text-red-600 text-center text-xl md:text-md lg:text-xl py-2 mb-4 font-semibold bounce">
                <p>It's Back!!</p>
            </div>{' '} */}
            <h1
                className="hero-title text-white tracking-wider w3-animate-opacity 
                hover:text-orange-400 font-semibold text-center body-font font-nineteeneighty max65 bg-gray-900 bg-opacity-90 rise-up"
            >
                Bugle Horn <br />
                Showcase and Jam
            </h1>
            <p className="text-sm md:text-md lg:text-xl mt-4 tracking-wider text-center uppercase text-gray-100 bg-gray-950 md:p-1 font-semibold max65">
                Showcase + Jam Session in Charlton, SE7
            </p>
            <Stamp />
        </section>
    );
};

export default Hero;
