import React, { Component } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import styles from './home.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';
import Carousel from '../../components/carousel/carousel';
import Callout from '../../components/callout/callout';

export default class Home extends Component {
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
        title='Gerimed Mobility'
        description='Gerimed Mobility Landing Page'
      >
        <div className={`${styles['home']}`}>
          <div className={`${styles['hero']}`}>
            <div className={`${styles['left']}`}>
              <div className={`${styles['info']}`}>
                <h1 className={`${styles['title']}`}>
                  High Quality Products
                </h1>

                <p className={`${styles['content']}`}>
                  Gerimed Mobility offers you a wide selection of products to help aid you in your life.
                  You can expect only the best products that are of high quality.
                  Wether you are in need of a wheelchair or something as simple as a bed. We have it all.
                </p>
              </div>

              <div className={`${styles['actions']}`}>
                <ButtonGroup variant='outlined' color='primary'>
                  <Button onClick={() => this.openPage('/products')}>Browse Products</Button>
                  <Button onClick={() => this.openPage('/contact')}>Contact Us</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className={`${styles['right']}`}>
              <img alt='Lady in a wheelchair' src={require('../../static/hero1.webp')} />
            </div>
          </div>

          <div className={`${styles['more-info']}`}>
            <h2>Welcome to Gerimed Mobility</h2>
            <br />
            <p>
            Gerimed Mobility strives to target the mobility needs of the elderly and to offer high quality products and good service at the best possible price.  Gerimed Mobility is situated in Langebaan, however we can supply customers all over the West Coast of South Africa.
            </p>
            <br />

            <div style={{height: 400}}>
              <Carousel images={[
                {src: require('../../static/IMG_6350.jpg')},
                {src: require('../../static/IMG_6351.jpg')},
                {src: require('../../static/IMG_6352.jpg')},
                {src: require('../../static/IMG_6353.jpg')},
                {src: require('../../static/IMG_6354.jpg')},
                {src: require('../../static/IMG_6355.jpg')},
                {src: require('../../static/IMG_6356.jpg')},
                {src: require('../../static/IMG_6357.jpg')},
              ]} />
            </div>
            <br />
            <h2>Our Products</h2>
            <br />
            <Callout>
              <h2>Under Construction</h2>
              <p style={{marginBottom: 10}}>We are currently in the procces of recreating the product page and uploading all our products to our website.</p>
              <p><b>Stay Tuned</b></p>
              <br />
              <Button onClick={() => this.openPage('/contact')} variant='contained' color='secondary'>Contact Us</Button>
            </Callout>
            <br />
            <Button onClick={() => this.openPage('/products')}  variant='contained' color='primary'>
              Our Products
            </Button>
          </div>
        </div>
      </Page>
      
    );
  }
}
