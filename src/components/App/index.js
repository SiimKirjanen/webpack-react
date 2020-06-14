import React from 'react';
import styles from './styles.scss'

function App() {
    console.log(styles);
    return (
        <h1 className={styles.app}>Hello World!</h1>
    );
}

export default App;