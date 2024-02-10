interface TitleProps {
    id?: string;
    title: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { id, title } = props;
    return (
        <section
            id={id}
            className="scroll-section flex justify-center align-middle py- md:py-8"
        >
            <h2
                className="description text-4xl md:text-5xl text-orange-400 
                text-center font-nineteeneighty"
            >
                {title}
            </h2>
        </section>
    );
};

export default Title;
