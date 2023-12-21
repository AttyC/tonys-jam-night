import Card from './Card';

const Home = () => {
    return (
        <>
            <div className="main">
                <Card />

                <p>
                    Description - general - in your own tone of voice - bit
                    about you/ some kind of welcoming message like Welcoming
                    message forgot to complete! Something like: come along and
                    play songs with other musicians / support/ mix if levels,
                    all welcome etc
                </p>
                <p>Book your place</p>
                <p>Equipment supplied</p>
                <p>Accompaniment available - House Band</p>
                <p>Time to come/sign up</p>
                <p>
                    And under what to expect you can give some info about the
                    setup, types of songs etc
                </p>
                <p>Contact number - suggest WhatsApp Email Instagram?</p>
                <p>Book your place</p>

                <h3>FAQS</h3>

                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        Profile
                    </li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                        Settings
                    </li>
                    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                        Messages
                    </li>
                    <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
                </ul>
            </div>
        </>
    );
};

export default Home;
