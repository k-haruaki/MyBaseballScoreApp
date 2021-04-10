import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, PerformanceTop5 } from './templates';
import MainFrame from './components/Main/MainFrame';

const Router = () => {
    return (
        <MainFrame
            mainContents={
                <Switch>
                    <Route exact path='/top' component={Home} />
                    <Route path='/performance-top5' component={PerformanceTop5} />
                </Switch>
            }
        />
    )
}

export default Router;