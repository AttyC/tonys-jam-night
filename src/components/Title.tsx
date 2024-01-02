interface TitleProps {
    id?: string;
    title: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { id, title } = props;
    return (
        <section
            id={id}
            className="scroll-section flex justify-center align-middle py-4 md:py-8 font-nineteeneighty "
        >
            <h2
                className="description text-4xl md:text-7xl text-orange-400 tracking-wider
                text-center"
            >
                {/* <span className="text-lg md:text-3xl "> */}
                {title}
                {/* </span>{' '} */}
            </h2>
        </section>
    );
};

export default Title;
