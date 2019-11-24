import React, { Component } from 'react';
// import { Button } from '@material-ui/core';

import styles from './about.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';

export default class About extends Component {
  render() {
    return (
      <Page
        title='Gerimed Mobility: About Us'
        description='Here you can learn all about us and what it is we do.'
      >
        <div className={`${styles['about']}`}>
          <h1 className={`${styles['title']}`}>Gerimed Mobility</h1>
          <br />
          <p>
            Gerimed is a family run business since 2001.  We guarantee excellent care for the elderly in the two Private Homes for the aged in Langebaan and Kleinmond.
          </p>
          <br />
          <p>
          In our efforts to achieve this we further endeavour to make mobility for the elderly possible for as long as they are able to move with assisted aids.  With the demand for aids in this regard, Gerimed Mobility was founded.
          </p>
          <br />
          <p>
          We strive to target the mobility needs of the elderly and to offer high quality products and good service at the best possible price.  Our service ranges from the supply and distribution of various medical aids; thus allowing us to offer many different selections of products as far as medical aids are concerned.
          </p>
          <br />
          <p>
            Gerimed Mobility is situated in Langebaan, however we do supply customers all over the West Coast of South Africa.
          </p>
          <br/>
        </div>
      </Page>
      
    );
  }
}
