import React, { Component } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import styles from './shop.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';

@withRouter
export default class Shop extends Component {
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
        title='Gerimed Mobility: Our Shop'
        description='All the products we provide and their details.'
      >
        <div className={`${styles['services']}`}>
          <h1 className={`${styles['title']}`}>Our Shop</h1>
          <section className={`${styles['grid']}`}>
            <Card className={`${styles['card']}`}>
              <CardContent>
                <h2>Products</h2>
              </CardContent>
              <CardContent>
                <Button variant='contained' color='primary' fullWidth>
                  View Products
                </Button>
              </CardContent>
            </Card>
            
            <Card className={`${styles['card']}`}>
              <CardContent>
                <h2>Products</h2>
              </CardContent>
              <CardContent>
                <Button variant='contained' color='primary' fullWidth>
                  View Products
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </Page>

    );
  }
}
