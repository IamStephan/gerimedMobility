import React, { Component } from 'react';
import { Button, ButtonGroup, Card, CardContent, CardActions } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './home.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';
import Callout from '../../components/callout/callout';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hero: {
        calloutIndex: 0
      }
    }

    this.openPage = this.openPage.bind(this)
    this.openItem = this.openItem.bind(this)
  }

  openPage(url) {
    this.props.history.push(url)
  }

  openItem(url) {
    window.open(url)
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
                <div className={`${styles['callout']}`}>
                  <h1 className={`${styles['title']}`}>
                    High Quality Products
                  </h1>
                  <p className={`${styles['content']}`}>
                    Gerimed Mobility offers you a wide selection of products to help aid you in your life. You can expect only the best products that are of high quality. Whether you are in need of a wheelchair or something as simple as a bed, we have it all.
                  </p>
                </div>
              </div>

              <div className={`${styles['actions']}`}>
                <ButtonGroup variant='outlined' color='primary'>
                  <Button onClick={() => this.openPage('/shop')}>View Our Shop</Button>
                  <Button onClick={() => this.openPage('/contact')}>Contact Us</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className={`${styles['right']}`}>
              <img alt='Lady in a wheelchair' src={require('../../static/production/hero3.jpg')} />
            </div>
          </div>

          <div className={`${styles['more-info']}`}>
            <br/>
            <Callout style={{marginBottom: 25}}>
              <h2>We are open during lockdown</h2>
              <p style={{marginBottom: 10}}>
                Gerimed mobility is registered as an essential business.
              </p>
            </Callout>

            <h2>Welcome to Gerimed Mobility</h2>
            <br />
            <p>
              Gerimed Mobility strives to target the mobility needs of the elderly and to offer high quality products and good service at the best possible price.  Gerimed Mobility is situated in Langebaan, however we can supply customers all over the West Coast of South Africa.
            </p>
            <br />

            <div>
              <CarouselProvider
                naturalSlideWidth={16}
                naturalSlideHeight={9}
                totalSlides={5}
                infinite
                isPlaying={false}
              >
                <div className={styles['carousel-con']}>
                  <Slider>
                    <Slide>
                      <Image className={styles['slide-img-promo']} src={require('../../static/promotion.jpeg')} />
                    </Slide>
                    <Slide>
                      <Image className={styles['slide-img']} src={require('../../static/store_new/home_2.jpeg')} />
                    </Slide>
                    <Slide>
                      <Image className={styles['slide-img']} src={require('../../static/store_new/home_3.jpeg')} />
                    </Slide>
                    <Slide>
                      <Image className={styles['slide-img']} src={require('../../static/store_new/home_4.jpeg')} />
                    </Slide>
                    <Slide>
                      <Image className={styles['slide-img']} src={require('../../static/store_new/home_5.jpeg')} />
                    </Slide>
                    
                  </Slider>

                  <ButtonNext className={`${styles['btn-next']} ${styles['btn-control']}`}>
                    <ChevronRight fontSize='large' />
                  </ButtonNext>

                  <ButtonBack className={`${styles['btn-back']} ${styles['btn-control']}`}>
                    <ChevronLeft fontSize='large' />
                  </ButtonBack>
                </div>
              </CarouselProvider>
            </div>
            <br />
            <h2>Our Featured Products</h2>
            <br />
            <section className={`${styles['products']}`}>
              {
                [
                  {title: 'Mobility & Aids', src: require('../../static/production/mobilityaids.jpg'), pdf: 'pdf/mobility.pdf'},
                  {title: 'Wheelchairs Aluminium Frames', src: require('../../static/production/wheelchairsaluminium.jpg'), pdf: 'pdf/wheelchairsaluminium.pdf'},
                  {title: 'Wheelchairs Metal Frames', src: require('../../static/production/wheelchairsmetal.jpg'), pdf: 'pdf/wheelchairsmetal.pdf'},
                ].map((item, i) => (
                  <Card elevation={5} className={`${styles['card']}`} key={i}>
                    <CardContent className={`${styles['media']}`}>
                      <img alt={item.title} src={item.src} />
                    </CardContent>
                    
                    <CardContent className={`${styles['content']}`}>
                      <h3 className={`${styles['head']}`}>
                        {item.title}
                      </h3>
                    </CardContent>

                    <CardActions>
                      <Button fullWidth variant='contained' color='secondary' onClick={() => {
                        this.openItem(__dirname + item.pdf)
                      }}>
                        Download PDF
                      </Button>
                    </CardActions>
                  </Card>
                ))
              }
            </section>
            <br />
            <Button onClick={() => this.openPage('/products')}  variant='contained' color='primary'>
              View All Products
            </Button>
          </div>
        </div>
      </Page>
      
    );
  }
}
