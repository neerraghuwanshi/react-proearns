import React, { Component } from 'react'
import styles from '../css/About.module.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p className={styles.para}>
                    Neer Raghuwanshi founded Proearns with a vision to optimize advertisement pricing.
                </p>
                <p className={styles.para}>
                    Proearns, an app where one can advertise on their price and the other gets paid the amount promised to watch the ad.
                </p>
                <p className={styles.para}>
                    No one is interested to watch ads for free. But with proearns the same individual's motive is money so they watch full ad to get the reward.
                </p>
                <p className={styles.para}>
                    Ads are annoying when they interrupt your mean time, you don't focus on the ad and get irritated. But when the focus and motive is changed you want to watch ads.
                </p>
                <p className={styles.para}>
                    On other platforms advertisors have to pay high for interested users and on ads which play for more than 30 seconds, the ads cost gets very high. On Proearns its not the case, its you deciding the reward for the user and hence you deciding the cost of ad.
                </p>
            </div>
        )
    }
}
