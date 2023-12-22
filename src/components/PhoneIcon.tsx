const styles = {
    Icon: {
        color: '#ffffff',
        fill: '#ffffff',
        fontSize: '40px',
        top: '227px',
        left: '523px',
        width: '30px',
        height: '30px',
    },
};

const PhoneIcon = () => (
    <svg style={styles.Icon} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
    </svg>
);

export default PhoneIcon;
