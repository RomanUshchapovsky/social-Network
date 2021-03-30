import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import './App.css';
import store from "./redux/redux-store";
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import { withSuspense } from './hoc/withSuspense';
// React.lasy
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return < Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />

            <Route path='/Login'
              render={() => <LoginPage />} />

            <Route path='/dialogs'
              render={withSuspense(DialogsContainer)} />

            <Route path='/users'
              render={withSuspense(UsersContainer)} />

            <Route path='/music'
              render={withSuspense(Music)} />

            <Route path='/news'
              render={withSuspense(News)} />

            <Route path='/settings'
              render={withSuspense(Settings)} />
           ></Switch>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp;