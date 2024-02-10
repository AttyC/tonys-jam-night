interface TitleProps {
    id?: string;
    title: string;
    colour: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { id, title, colour } = props;

    console.log(colour);
    return (
        <section
            id={id}
            className="scroll-section flex justify-center align-middle py-4 md:py-8"
        >
            <h2
                className={`event-type text-4xl md:text-5xl text-${colour} text-center font-nineteeneighty`}
            >
                {title}
            </h2>
        </section>
    );
};

export default Title;
