import Title from './Title';

interface EventTypeProps {
    id?: string;
    title: string;
    style: { bg: string; text: string };
}
const EventType: React.FC<EventTypeProps> = (props) => {
    const { id, title, style } = props;
    return (
        <div className="col-md-6">
            <div
                className={`h-100 p-5 text-${style.text} bg-${style.bg} rounded-3`}
            >
                <Title id={id} title={title}></Title>
                <p>
                    Swap the background-color utility and add a `.text-*` color
                    utility to mix up the jumbotron look. Then, mix and match
                    with additional component themes and more.
                </p>
                <button className="btn btn-outline-light" type="button">
                    Example button
                </button>
            </div>
        </div>
    );
};

export default EventType;
