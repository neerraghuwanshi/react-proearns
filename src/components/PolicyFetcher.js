import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import styles from '../css/PolicyFetcher.module.css'
import PolicyContent from './PolicyContent'


function PolicyFetcher(props) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    const { url } = props

    useEffect(() => {
        axios.get(
            `https://api.proearns.com/policies/${url}`,{
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then(response=>{
            setLoading(false)
            setData(response.data)
        }).catch(()=>{
            setLoading(false)
            setError(true)
        })
    }, [url])

    return (
        <div className={styles.centredContent}>
            {loading && 
            <Loader
                type="ThreeDots"
                color="#fff"
                height={100}
                width={100}
                timeout={10000}/>}
            {error && 
            <h2>
                Something Went Wrong
            </h2>}
            {data &&
            <PolicyContent 
                data={data} />}
        </div>
    )
}

export default PolicyFetcher