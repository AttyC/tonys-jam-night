interface SubtitleProps {
    subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = (props) => {
    const { subtitle } = props;
    return (
        <h4 className="description md:text-xl py-4 font-semibold">
            {subtitle}
        </h4>
    );
};

export default Subtitle;
