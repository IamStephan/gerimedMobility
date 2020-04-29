import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import styles from './contact.module.scss';

import Page from '../../components/pageTemplate/pageTemplate';
import ContactModal from '../../components/contactModal/contactModal';
import Callout from '../../components/callout/callout'

@withRouter
export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dialog: {
        isOpen: false
      }
    }

    this.closeDialog = this.closeDialog.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.openPage = this.openPage.bind(this)
  }

  closeDialog() {
    this.setState({
      ...this.state,
      dialog: {
        isOpen: false
      }
    })
  }

  openDialog() {
    this.setState({
      ...this.state,
      dialog: {
        isOpen: true
      }
    })
  }

  openPage(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Page
        title='Gerimed Mobility: Contact Us'
        description='You can contact us from this page.'
      >
        <div className={`${styles['contact']}`}>
          <h1 className={`${styles['title']}`}>Contact Us</h1>

          <section className={`${styles['locations']}`}>
            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Gerimed Mobility' src="https://www.google.com/maps/d/embed?mid=1Nl7vw5ohRyj3EKKfffbQHPmlwV-zY5gT" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Gerimed Mobility
                </h2>
                <br />
                <p>Tel: 022 772 1273</p>
                <p>Cell: 082 079 4173</p>
                <p>844@Oostewal Building, Oostewal Rd</p>
                <p>Langebaan, 7357</p>
                <br />
              </div>
            </div>
          </section>
          <ContactModal open={this.state.dialog.isOpen} onClose={this.closeDialog} />
        </div>
      </Page>
      
    );
  }
}
