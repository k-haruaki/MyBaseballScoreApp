import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Information, PerformanceTop5, PlayerList } from './templates';
import MainFrame from './components/Main/MainFrame';
import WinLoseTable from './templates/teamInfo/WinLoseTable';

const Router = () => {
    return (
        <MainFrame
            mainContents={
                <Switch>
                    <Route exact path='/top' component={Home} />
                    <Route exact path='/information' component={Information} />
                    <Route exact path='/win-lose-table' component={WinLoseTable} />
                    <Route exact path='/player-list' component={PlayerList} />

                    <Route exact path='/performance/top5' component={PerformanceTop5} />
                </Switch>
            }
        />
    )
}

export default Router;