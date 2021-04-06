import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, ScoreTop5 } from './templates';
import MainFrame from './components/Main/MainFrame';

const Router = () => {
    return (
        <MainFrame
            mainContents={
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/scoretop5' component={ScoreTop5} />
                    {/* <Route path='/analyticalLab(/:id)?' component={AnalyticalLab} /> */}
                </Switch>
            }
        />
    )
}

export default Router;