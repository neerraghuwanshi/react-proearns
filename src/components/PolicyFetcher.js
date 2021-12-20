import React from 'react'

import PolicyContent from './PolicyContent'
import styles from '../css/PolicyFetcher.module.css'


function PolicyFetcher({ data }) {
    return (
        <div className={styles.centredContent}>
            <PolicyContent
                data={data} />
        </div>
    )
}

export default PolicyFetcher