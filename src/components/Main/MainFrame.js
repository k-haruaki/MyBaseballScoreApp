import React, { useState }from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../reducks/Menu/operations';
import { getMenuName } from '../../reducks/Menu/selecters';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertChartTwoToneIcon from '@material-ui/icons/InsertChartTwoTone';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import SportsBaseballTwoToneIcon from '@material-ui/icons/SportsBaseballTwoTone';
import SportsBaseballOutlinedIcon from '@material-ui/icons/SportsBaseballOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const MainFrame = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const pageSubTitle = getMenuName(selector);
  const [open, setOpen] = useState(false);
  

  const pageTitle = 'My Baseball Score Lab';
  const teamInfo = [
    {pagePath: 'top', pageName: 'トップページ'},
    {pagePath: 'information', pageName: 'お知らせ'},
    {pagePath: 'game-schedule', pageName: '試合日程・結果'},
    // {pagePath: 'match-result', pageName: '試合結果'},
    {pagePath: 'game-result-list', pageName: '試合結果一覧'},
    {pagePath: 'player-list', pageName: '選手一覧'},
  ];
  const performance = [
    {pagePath: 'performance/top5', pageName: '部門Top5'},
    {pagePath: 'performance/pitcher', pageName: '投手成績'},
    {pagePath: 'performance/butter', pageName: '打者成績'},
  ];
  const scoreInput = [
    {pagePath: 'input/game-result', pageName: '試合結果'},
    {pagePath: 'input/player', pageName: '選手登録'},
    {pagePath: 'input/team-performance', pageName: 'チーム成績'},
    {pagePath: 'input/person-performance', pageName: '個人成績'},
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // サイドバーのチームクリックイベント
  const selectMenuClick = (e, index, menuValue) => {
    dispatch(selectMenu(index, menuValue));
    // console.log(pageSubTitle);
    handleDrawerClose();
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {pageTitle}  {pageSubTitle}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            {props.mainContents}
          </Typography>
        </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {teamInfo.map((value, index) => (
            <ListItem button key={value.pageName} onClick={(event) => selectMenuClick(event, index, value)}>
              <ListItemIcon>{index % 2 === 0 ? <SportsBaseballTwoToneIcon /> : <SportsBaseballOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={value.pageName} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {performance.map((value, index) => (
            <ListItem button key={value.pageName} onClick={(event) => selectMenuClick(event, index, value)}>
              <ListItemIcon>{index % 2 === 0 ? <InsertChartTwoToneIcon /> : <InsertChartOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={value.pageName} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {scoreInput.map((value, index) => (
            <ListItem button key={value.pageName} onClick={(event) => selectMenuClick(event, index, value)}>
              <ListItemIcon>{index % 2 === 0 ? <BorderColorTwoToneIcon /> : <BorderColorOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={value.pageName} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>
  );
}

export default MainFrame;