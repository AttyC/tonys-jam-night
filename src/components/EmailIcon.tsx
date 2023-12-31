const styles = {
    Icon: {
        color: '#ffffff',
        fill: '#ffffff',
        fontSize: '40px',
        top: '593px',
        left: '678px',
        width: '30px',
        height: '30px',
    },
};

const EmailIcon = () => (
    <svg style={styles.Icon} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
    </svg>
);

export default EmailIcon;
