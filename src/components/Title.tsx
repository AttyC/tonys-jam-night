interface TitleProps {
    id?: string;
    title: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { id, title } = props;
    return (
        <section
            id={id}
            className="flex justify-center align-middle py-4 md:py-8 "
        >
            <h2
                className="description text-lg md:text-5xl text-orange-400 
                font-semibold text-center"
            >
                <span className="text-lg md:text-3xl tracking-widest">
                    {title}
                </span>{' '}
            </h2>
        </section>
    );
};

export default Title;
