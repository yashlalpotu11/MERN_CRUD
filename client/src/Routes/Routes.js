import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Navbar from '../Layout/Navbar/Navbar'
import Add from '../Layout/Add/Add'
import Home from '../Layout/Home/Home'

export default function Routes() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
            </Switch>
        </>
    )
}
