import Title from './Title';
import EmailIcon from './EmailIcon';
import PhoneIcon from './PhoneIcon';
import IMAGES from '../images/Images';

const Contact: React.FC = () => {
    return (
        <section className="py-4 md:py-2">
            <Title id="contact" title="Contact"></Title>
            <p className="px-4 font-medium">
                Contact me for more information on the Showcase or the Jam.
                WhatsApp is best!
            </p>
            <section className="p-8 text-lg">
                <ul className="flex flex-col align-middle md:justify-center md:flex-row">
                    <li className="py-2 flex justify-center">
                        <a
                            aria-label="Chat on WhatsApp"
                            className="whatsApp"
                            target="_blank"
                            href="https://wa.me/447809073148?text=Hi!%20I'm%20interested%20in%20the%20Bugle%20Horn%20jam%20event%20."
                        >
                            <img
                                src={IMAGES.whatsApp}
                                alt="Chat on WhatsApp"
                                className="w-56 md:w-44"
                            />
                        </a>
                    </li>
                    <li className=" py-2 md:ml-4 flex justify-center">
                        <PhoneIcon />
                        <a
                            className="font-semibold text-gray-100 self-center px-2"
                            href="tel:447809073148"
                        >
                            Phone
                        </a>
                    </li>
                    <li className=" py-2 flex justify-center">
                        <EmailIcon />
                        <a
                            aria-label="Email"
                            href="mailto:tonydooley59@gmail.com"
                            className="font-semibold text-gray-100 self-center px-2"
                        >
                            {' '}
                            Email{' '}
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Contact;
