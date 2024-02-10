import MusicIcons from './MusicIcons';
import Title from './Title';

interface EventTypeProps {
    id?: string;
    title: string;
    style: { bg: string; text: string };
}

const ShowcaseText = () => (
    <>
        <p className="text-md md:text-lg px-4 md:px-8 pb-2 font-semibold text-center">
            Please contact me if you wish to do a few songs with your band, or
            use the services of the house band!
        </p>{' '}
        <ul className="px-8">
            <li className="text-md md:text-lg px-4 py-2">
                <span className="font-semibold">Guitarists and bassists</span>,
                just bring your guitars.
            </li>
            <li className="text-md md:text-lg px-4 py-2">
                <span className="font-semibold">Drummers</span> need only bring
                sticks - full drum set supplied, including all breakables:
                snare, cymbals etc.
            </li>
            <li className="text-md md:text-lg px-4 py-2">
                <span className="font-semibold">Singers</span>, microphones will
                be supplied.
            </li>
        </ul>
    </>
);
const JamText = () => (
    <>
        <p className="text-md md:text-lg px-2 pb-2 font-semibold text-center">
            Here is a chance to jam and network with other musicians and
            singers. Full back line supplied.
        </p>{' '}
        <h3 className="text-center font-medium uppercase py-3">
            Back line equipment
        </h3>
        <ul className="list-disc mx-2 md:flex md:flex-col md:justify-center md:items-center">
            <li className="text-md md:text-lg px-4 py-2">
                Guitar and bass amps
            </li>
            <li className="text-md md:text-lg px-4 py-2">
                Full Pearl drum kit with cymbals ( Zildian and Sabian )
            </li>
            <li className="text-md md:text-lg px-4 py-2">
                Korg Krome piano synth with pedal
            </li>
            <li className="text-md md:text-lg px-4 py-2">
                Full mackie PA with Foldback and vocal mics
            </li>
        </ul>
    </>
);

const EventType: React.FC<EventTypeProps> = (props) => {
    const { id, title, style } = props;
    const Text = id === 'showcase' ? ShowcaseText : JamText;
    return (
        <div className="col-md-6">
            <div
                className={`h-100 p-5 text-${style.text} bg-${style.bg} rounded-3`}
            >
                <Title id={id} title={title}></Title>
                <Text />
                <MusicIcons />
                <button className="btn btn-outline-light" type="button">
                    Example button
                </button>
            </div>
        </div>
    );
};

export default EventType;
