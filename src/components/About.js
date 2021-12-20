import React, { Component } from 'react'

import styles from '../css/About.module.css'


export default class About extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p className={styles.para}>
                    Proearns is a mobile app started by Neer Raghuwanshi as a hobby project with serious goals in September 2020 with an idea of getting paid for watching advertisements.
                </p>

                <p className={styles.para}>
                    The Business name (Proearns) and app icon is registered with a trademark.
                </p>

                <p className={styles.para}>
                    Proearns, an app where one can advertise on their price and others get paid the amount promised to watch the ad on first come first server basis.
                </p>

                <p className={styles.para}>
                    We are working on extending Proearns with new ideas, features user feedback and interaction. Proearns has great scopes and opportunities in the near future.
                </p>

                <p className={styles.para}>
                    Currently Proearns is available only for Android but we are working for releasing it to iOS as well.
                    Here is the Android app,
                    <a 
                        target={'_blank'} 
                        className={styles.link} 
                        rel="noopener noreferrer"
                        href='https://play.google.com/store/apps/details?id=com.proearns'>
                        {' Proearns'}
                    </a>.
                </p>

                <p className={styles.para}>
                </p>
            </div>
        )
    }
}
