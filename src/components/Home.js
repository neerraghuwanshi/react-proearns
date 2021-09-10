import React from 'react'
import styles from '../css/Home.module.css'


const Home = () => {

    const { name, image, heading, tagLine } = styles

    return (
        <div id={styles.container}>
            <h6 className={name + ' ' + heading}>
                Proearns
            </h6>
            <img 
                alt=''
                className={image}
                src="https://proearns-website.s3.ap-south-1.amazonaws.com/Proearns.png"
            />
            <h2 className={name + ' ' + tagLine}>
                The Way Pro Earns
            </h2>
        </div>
    )     
}


export default Home