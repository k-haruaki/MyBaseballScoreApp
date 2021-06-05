import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { theme } from './components/UIkit';
import { 
    ButterPerformance, 
    Home, 
    Information, 
    GameDetailResult, 
    GameResultList, 
    GameSchedule, 
    PerformanceTop5, 
    PitcherPerformance, 
    PlayerList,
    PlayerEdit,
    PlayerEditList
} from './templates';
import { MainFrame } from './components/Main/index';
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

                        <Route exact path='/top5/performance' component={PerformanceTop5} />
                        <Route exact path='/pitcher/performance' component={PitcherPerformance} />
                        <Route exact path='/butter/performance' component={ButterPerformance} />

                        <Route exact path='/player/edit' component={PlayerEditList} />
                        <Route path='/player/edit(/:uniform-number)' component={PlayerEdit} />
                    </Switch>
                }
            />
        </MuiThemeProvider>
    )
}

export default Router;