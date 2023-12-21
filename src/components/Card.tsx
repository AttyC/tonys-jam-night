const styles = {
    Card: {
        // top: '102px',
        // left: '64px',
        // width: '1312px',
        // height: '290px',
        // backgroundImage: 'url(/img/acoustic-guitar-player-in-pale-light.png)',
        backgroundImage: 'url(/img/drums.jpeg)',
        height: '70vh',
        backgroundColor: 'rgba(50,50,50,0.48)',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
};

const Card = () => {
    return (
        <section style={styles.Card}>
            <span className="text-center">Welcome to</span>
            <h1 className=" text-white font-semibold text-center py-4 body-font font-nineteeneighty">
                Tony's Function Junction
            </h1>
            <h2>Jam night at the Bugle, Charlton</h2>
        </section>
    );
};

export default Card;
