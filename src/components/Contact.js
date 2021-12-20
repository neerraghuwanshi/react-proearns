import React, { Component } from 'react'
import styles from '../css/Contact.module.css'

export default class Contact extends Component {

    render() {
        const { icon, container, row, link } = styles;

        return (
            <div className={container}>
                <div>
                    <div className={row}>
                        <a target={'_blank'} className={link} rel="noopener noreferrer" href={'mailto:raghuwanshineer1@gmail.com'}>
                            <i className={
                                `${'far fa-envelope'} ${icon}`
                            }>
                            </i>
                            raghuwanshineer1@gmail.com
                        </a>
                    </div>

                    <div className={row}>
                        <a target={'_blank'} className={link} rel="noopener noreferrer" href={'https://www.linkedin.com/in/neerraghuwanshi/'}>
                            <i className={
                                `${'fab fa-linkedin-in'} ${icon}`
                            }>
                            </i>
                            Neer Raghuwanshi
                        </a>
                    </div>

                    <div className={row}>
                        <a target={'_blank'} className={link} rel="noopener noreferrer" href={'https://github.com/neerraghuwanshi'}>
                            <i className={
                                `${'fab fa-github'} ${icon}`
                            }>
                            </i>
                            neerraghuwanshi
                        </a>
                    </div>
                    
                    <div className={row}>
                        <a target={'_blank'} className={link} rel="noopener noreferrer" href={'https://www.instagram.com/neerraghuwanshi'}>
                            <i className={
                                `${'fab fa-instagram'} ${icon}`
                            }>
                            </i>
                            neerraghuwanshi
                        </a>
                    </div>

                    <div className={row}>
                        <a target={'_blank'} className={link} rel="noopener noreferrer" href={'https://twitter.com/__Neer__'}>
                            <i className={
                                `${'fab fa-twitter'} ${icon}`
                            }>
                            </i>
                            __Neer__
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
