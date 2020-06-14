import React from 'react';
import styles from './styles.scss'
import WebpackImg from './../../assets/img/webpack.png';

function App() {
    return (
        <>
            <h1 className={styles.app}>Hello World!</h1>
            <img src={WebpackImg} />
        </>
    );
}

export default App;