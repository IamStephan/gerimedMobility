import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import styles from './topbar.module.scss'

import Sidebar from '../sidebar/sidebar'

@inject('AppStore')
@withRouter
@observer
export default class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0
    }

    this.setWindowSize = this.setWindowSize.bind(this)
    this.openPage = this.openPage.bind(this)
  }

  componentDidMount() {
    this.setWindowSize()
    window.addEventListener('resize', this.setWindowSize)
  }

  setWindowSize() {
    this.setState({
      ...this.state,
      windowWidth: window.innerWidth
    })
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    const { AppStore } = this.props

    return (
      <nav className={`${styles['topbar']}`}>
        <div className={`${styles['logo']}`}>
          <img alt='gerimed' className={`${styles['img']}`} src={require('../../static/Logo1.png')} />
        </div>

        {
          this.state.windowWidth > styles.breakpointTwo ? (
            <div className={`${styles['navigationDesktop']}`}>
              <Button 
                variant={this.props.location.pathname === '/' ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => this.openPage('/')}
                style={{margin: 10}}
              >
                Home
              </Button>
              <Button 
                variant={this.props.location.pathname === '/shop' ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => this.openPage('/shop')}
                style={{margin: 10}}
              >
                Our Shop
              </Button>
              <Button 
                variant={this.props.location.pathname === '/about' ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => this.openPage('/about')}
                style={{margin: 10}}
              >
                About Us
              </Button>
              <Button 
                variant={this.props.location.pathname === '/contact' ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => this.openPage('/contact')}
                style={{margin: 10}}
              >
                Contact Us
              </Button>
            </div>
          ) : (
            <div className={`${styles['navigationMobile']}`}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={() => AppStore.openSidebar()}>Open Menu</Button>
            </div>
          )
        }
        
        {
          AppStore.sidebar.isOpen && this.state.windowWidth < styles.breakpointTwo && (
            <Sidebar />
          )
        }
      </nav>
    );
  }
}
