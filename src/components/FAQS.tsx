const FAQS: React.FC = () => {
    return (
        <ul className="text-md font-medium text-white border-double border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white py-4 md:p-8 mx-4 md:mx-0">
            <li className=" px-4 py-2 border-b border-gray-200   dark:border-gray-600 text-md md:text-lg">
                Q: What shall I bring?
            </li>
            <li className=" px-4 py-2 border-b border-gray-200   dark:border-gray-600 text-md md:text-lg">
                <p className="text-md md:text-xl"></p>
                Q: I'm a beginner, what support will I have?
            </li>
            <li className=" px-4 py-2 border-b border-gray-200   dark:border-gray-600 text-md md:text-lg">
                Q: Can I pick a song to play?
            </li>
        </ul>
    );
};

export default FAQS;
