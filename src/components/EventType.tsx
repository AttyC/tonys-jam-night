import MusicIcons from './MusicIcons';
import Title from './Title';

interface EventTypeProps {
    id?: string;
    title: string;
    style: { bg: string; text: string };
}

const ShowcaseText = () => (
    <>
        <p className="text-md md:text-lg py-4 md:py-2 font-medium md:text-center">
            Please contact me if you wish to do a few songs with your band, or
            use the services of the house band!
        </p>{' '}
        <ul className="">
            <li className="text-md md:text-lg  py-2">
                <span className="font-semibold">Guitarists and bassists</span>,
                just bring your guitars.
            </li>
            <li className="text-md md:text-lg py-2">
                <span className="font-semibold">Drummers</span> need only bring
                sticks - full drum set supplied, including all breakables:
                snare, cymbals etc.
            </li>
            <li className="text-md md:text-lg py-2">
                <span className="font-semibold">Singers</span>, microphones will
                be supplied.
            </li>
        </ul>
    </>
);
const JamText = () => (
    <>
        <p className="text-md md:text-lg py-4 md:py-2 font-medium md:text-center">
            Here is a chance to jam and network with other musicians and
            singers. Full back line supplied.
        </p>{' '}
        <ul className="backline mx-2">
            <li className="py-2">- Guitar and bass amps</li>
            <li className="py-2">
                - Full Pearl drum kit with cymbals ( Zildian and Sabian )
            </li>
            <li className="py-2">- Korg Krome piano synth with pedal</li>
            <li className="py-2">
                - Full mackie PA with Foldback and vocal mics
            </li>
        </ul>
    </>
);

const EventType: React.FC<EventTypeProps> = (props) => {
    const { id, title, style } = props;
    const Text = id === 'showcase' ? ShowcaseText : JamText;
    return (
        <div className="col-md-6">
            <div className={`h-100 p-4 text-${style.text} bg-${style.bg}`}>
                <Title id={id} title={title}></Title>
                <Text />
                <MusicIcons />
            </div>
        </div>
    );
};

export default EventType;
