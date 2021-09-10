import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contact from './Contact'
import About from './About'
import Home from './Home'
import Default from './Default'
import Wrapper from './Wrapper'
import PrivacyPolicy from './PrivacyPolicy'
import TC from './TC'


const App = () => {

    return (
        <BrowserRouter basename='/React'>
            <Wrapper>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/contact'} component={Contact}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/privacypolicy'} component={PrivacyPolicy}/>
                    <Route exact path={'/tc'} component={TC}/>
                    <Route exact  component={Default}/>
                </Switch>
            </Wrapper>
        </BrowserRouter>
    )
}


export default App


