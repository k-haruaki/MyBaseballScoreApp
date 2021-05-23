import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { theme } from './components/UIkit';
import { 
    ButterPerformance, Home, Information, GameDetailResult, GameResultList, GameSchedule, PerformanceTop5, PitcherPerformance, PlayerList 
} from './templates';
import MainFrame from './components/Main/MainFrame';
import { MuiThemeProvider } from '@material-ui/core';

const Router = () => {
    return (
        <MuiThemeProvider theme = {theme}>
            <MainFrame
                mainContents={
                    <Switch>
                        <Route exact path='/top' component={Home} />
                        <Route exact path='/information' component={Information} />
                        <Route exact path='/game-schedule' component={GameSchedule} />
                        <Route exact path='/game-result-list' component={GameResultList} />
                        <Route exact path='/game-detail-result' component={GameDetailResult} />
                        <Route exact path='/player-list' component={PlayerList} />

                        <Route exact path='/performance/top5' component={PerformanceTop5} />
                        <Route exact path='/performance/pitcher' component={PitcherPerformance} />
                        <Route exact path='/performance/butter' component={ButterPerformance} />
                    </Switch>
                }
            />
        </MuiThemeProvider>
    )
}

export default Router;