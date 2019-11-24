import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import styles from './products.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';
import Callout from '../../components/callout/callout';

@withRouter
export default class Products extends Component {
  constructor(props) {
    super(props)
    
    this.openPage = this.openPage.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page
        title='Gerimed Mobility: Products'
        description='All the products we provide and their details.'
      >
        <div className={`${styles['services']}`}>
          <h1 className={`${styles['title']}`}>Products</h1>
          <Callout>
            <h2>Under Construction</h2>
            <p style={{marginBottom: 10}}>We are currently in the process of recreating the product page and uploading all our products to our website.</p>
            <p><b>Stay Tuned</b></p>
            <br />
            <Button onClick={() => this.openPage('/contact')} variant='contained' color='secondary'>Contact Us</Button>
          </Callout>
        </div>
      </Page>

    );
  }
}
