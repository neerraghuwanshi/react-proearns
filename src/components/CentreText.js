import React,{ useEffect, useRef } from 'react'
import styles from '../css/CentreText.module.css'

export default function CentreText(props){

    const { text } = props

    const currentText = useRef(text[0])
    
    const textLength = text.length

    let count = 0

    const wordLoop = setInterval(() => {
        let currentTextLength = currentText.current.textContent.length
        if(currentTextLength === textLength && count === 10){
            currentText.current.textContent = text[0]
            count = 0
        }
        else if(currentTextLength === textLength && count !== 10){
            count += 1
        }
        else{
            currentText.current.textContent = text.slice(0, currentTextLength+1)
        }
    },[100])

    useEffect(() => {
        return () => clearInterval(wordLoop)
    },[wordLoop])

    return (
        <div className={styles.container}>
            <h1 className={styles.text} ref={currentText}>
                {text[0]}
            </h1>
        </div>
    )
}
