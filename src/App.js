import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider as StoreProvider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import globals from './utils/globals.scss'

import ScrollToTop from './components/scrollToTop/scrollToTop'
import Topbar from './components/topbar/topbar'
import Footer from './components/footer/footer';
import Loader from './components/pageLoader/loader'

import AppStore from './stores/appStore'

const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: Loader
})

const Shop = Loadable({
  loader: () => import('./pages/shop/shop'),
  loading: Loader
})

const Products = Loadable({
  loader: () => import('./pages/products/products'),
  loading: Loader
})

const About = Loadable({
  loader: () => import('./pages/about/about'),
  loading: Loader
})

const Contact = Loadable({
  loader: () => import('./pages/contact/contact'),
  loading: Loader
})

const stores = {
  AppStore
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: globals.primary,
      contrastText: '#212121',
    },
    secondary: {
      main: globals.secondary,
      contrastText: 'white',
    }
  }
})

export default class Global extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Gerimed Mobility</title>
        </Helmet>

        <StoreProvider {...stores}>
          <ThemeProvider theme={theme}>
            <Router>
              <ScrollToTop />
              <Topbar />
              <Switch>
                <Route component={Home} exact path='/' />
                <Route component={Shop} exact path='/shop' />
                <Route component={Products} exact path='/products' />
                <Route component={About} exact path='/about' />
                <Route component={Contact} exact path='/contact' />
              </Switch>
              <Footer />
            </Router>
          </ThemeProvider>
        </StoreProvider>
        
      </Fragment>
    );
  }
}