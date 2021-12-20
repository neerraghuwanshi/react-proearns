import React from 'react'

import privacyPolicy from '../data/privacyPolicy'
import PolicyFetcher from './PolicyFetcher'


function PrivacyPolicy() {
    return (
        <PolicyFetcher 
            data={privacyPolicy}/>
    )
}


export default PrivacyPolicy