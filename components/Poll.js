import { useEffect, useState, componentDidMount } from 'react'
import styles from './poll.module.css'



export default function Poll({ ...props  }) {

    const [count, setCount] = useState(props.data.count)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
        <div className={styles.card} key={props.data.title}>
            <div className={styles.count}>{count}</div>
            <button type="button" onClick={handleIncrement} className={styles.button} >{props.data.title}</button>
        </div>
        </>
    )
}



