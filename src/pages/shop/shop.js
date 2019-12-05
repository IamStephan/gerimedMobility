import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
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
            <Card elevation={5} className={`${styles['card']}`}>
              <CardContent>
                <h2 className={`${styles['head']}`}>Products</h2>
              </CardContent>

              <CardContent className={`${styles['media']}`}>
                <img alt='Alunimium Wheel Chairs' src={require('../../static/production/wheelchairsaluminium.jpg')} />
              </CardContent>

              <CardContent className={`${styles['content']}`}>
                Here at Gerimed Mobility We sell a wide variety of products that are aimed at aiding you. From sports injuries or simply preventing bedsores.
              </CardContent>

              <CardActions>
                <Button variant='contained' color='secondary' fullWidth onClick={() => this.openPage('/products')}>
                  View Products
                </Button>
              </CardActions>
            </Card>
            
            <Card elevation={5} className={`${styles['card']}`}>
              <CardContent>
                <h2 className={`${styles['head']}`}>Rentals</h2>
              </CardContent>

              <CardContent className={`${styles['media']}`}>
                <img alt='Bedsore prevention' src={require('../../static/production/bedsoreprevention.jpg')} />
              </CardContent>

              <CardContent className={`${styles['content']}`}>
                Not only do we sell High quality products but we rent them out as well. When you are in need of temporary equipment you can contact us directly or simply fill out 'easy-to-use' online form.
              </CardContent>

              <CardActions>
                <Button variant='contained' color='secondary' fullWidth onClick={() => this.openPage('/contact')}>
                  Contact Us
                </Button>
              </CardActions>
            </Card>
          </section>
        </div>
      </Page>

    );
  }
}
