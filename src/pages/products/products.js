import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import styles from './products.module.scss'

import Page from '../../components/pageTemplate/pageTemplate';

const products = [
  {title: 'Appliances & Useful Aids', src: require('../../static/production/appliancesusefulaids.jpg'), pdf: 'pdf/appliances.pdf'},
  {title: 'Bedsore Prevention & Sleeping Aids', src: require('../../static/production/bedsoreprevention.jpg'), pdf: 'pdf/bedsore.pdf'},
  {title: 'Comodes & Aids', src: require('../../static/production/comodesaids.jpg'), pdf: 'pdf/comodes.pdf'},
  {title: 'Mobility & Aids', src: require('../../static/production/mobilityaids.jpg'), pdf: 'pdf/mobility.pdf'},
  {title: 'Shower & Bath Aids', src: require('../../static/production/showerbathaids.jpg'), pdf: 'pdf/showerbath.pdf'},
  {title: 'Sports & Injury Supports', src: require('../../static/production/sprtsinjuries.jpg'), pdf: 'pdf/OPPO.pdf'},
  {title: 'Wheelchairs Aluminium Frames', src: require('../../static/production/wheelchairsaluminium.jpg'), pdf: 'pdf/wheelchairsaluminium.pdf'},
  {title: 'Wheelchairs Metal Frames', src: require('../../static/production/wheelchairsmetal.jpg'), pdf: 'pdf/wheelchairsmetal.pdf'},
]

@withRouter
export default class Products extends Component {
  constructor(props) {
    super(props)
    
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
        title='Gerimed Mobility: Our Products'
        description='All the products we provide and their details.'
      >
        <div className={`${styles['services']}`}>
          <h1 className={`${styles['title']}`}>Our Products</h1>
          <section className={`${styles['grid']}`}>
            {
              products.map((item, i) => (
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
        </div>
      </Page>

    );
  }
}
