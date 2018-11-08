import loadable from 'lib/custom-loadable'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = loadable({
    loader: () => import('features/mobile-home/containers/Home'),
})

const AppMobile = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)

// Preload modules
// ProgramsList.preload()
// ProgramDetails.preload()
// TrainingDetails.preload()
// TrainingWatch.preload()

export default AppMobile
