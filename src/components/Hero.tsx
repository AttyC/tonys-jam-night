const Hero = () => {
    return (
        <section className="card-bg bg-blend-darken border-b-2 border-double border-b-orange-700">
            <div
                className="hero-title text-white tracking-wider
             hover:text-orange-500 font-semibold text-center body-font font-alfaslabone max65"
            >
                Tony's Function Junction
            </div>

            {/* <span
                className="text-white tracking-wider
             hover:text-orange-500 font-semibold text-center my-8 body-font font-nineteeneighty md:text-7xl text-6xl"
            >
                Tony's Function <br />
                Junction
            </span> */}
            <p className="text-sm md:text-xl mt-4 tracking-wider md:tracking-widest text-center uppercase text-gray-100 bg-gray-900 md:p-1 font-semibold max65">
                Music jams and events in Charlton
            </p>
        </section>
    );
};

export default Hero;
