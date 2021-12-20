import React from 'react'

import styles from'../css/PolicyContent.module.css'


function PolicyContent({ data }) {

    const mappingSubHeading = key => (
        data[key].map(item => (
            <li 
                key={item}
                className={styles.listItem}>
                {item}
            </li>
        ))
    )

    const content = Object.keys(data).map(key=>(
        <div key={key}>
            <h1 className={styles.heading}>
                {key}
            </h1>
            <ul>
                {mappingSubHeading(key)}
            </ul>
        </div>
    ))

    return (
        <div>
            {content}
        </div>
    )
}


export default PolicyContent
