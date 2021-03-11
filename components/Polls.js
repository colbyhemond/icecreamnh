import { useEffect, useState, componentDidMount } from 'react'
import Poll from './Poll'
import styles from './polls.module.css'

export default function Polls({ ...props  }) {

    if (!props.data || props.data.length == 0) return <div>Loading 🍦</div>

    return (
        <>
        <div className={styles.grid}>
            {props.data.map(rec => (
                <Poll data={rec} key={rec.title}/>
            ))}
         </div>
        </>
    )
  
}