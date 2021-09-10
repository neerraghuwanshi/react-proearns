import React from 'react'
import {render} from 'react-dom'

import './css/global/resets.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import App from './components/App'


render(
    <App/>,
    document.getElementById('root')
)