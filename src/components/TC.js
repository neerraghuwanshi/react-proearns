import React from 'react'

import termsAndConditions from '../data/termsAndConditions'
import PolicyFetcher from './PolicyFetcher'


function TC() {
    return (
        <PolicyFetcher 
            data={termsAndConditions}/>
    )
}


export default TC
