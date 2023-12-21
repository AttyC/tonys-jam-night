import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '40px',
        fontFamily: 'Source Sans Pro',
        fontWeight: 600,
        lineHeight: '60px',
        textAlign: 'center',
    },
};

const defaultProps = {
    text: 'Experience the Best Live Music in London',
};

const Text = (props: any) => {
    return <div style={styles.Text}>{props.text ?? defaultProps.text}</div>;
};

export default Text;
