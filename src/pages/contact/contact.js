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

          <Callout style={{marginBottom: 25}}>
            <h2>General inquiries</h2>
            <p style={{marginBottom: 10}}>You can contact us directly by filling in the form and we will respond as soon as possible.</p>
            <Button onClick={this.openDialog} variant='contained' color='secondary'>Inquiry Form</Button>
          </Callout>

          <section className={`${styles['locations']}`}>
            <div className={`${styles['location']}`}>
              <div className={`${styles['map']}`}>
              <iframe title='Gerimed Mobility' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26746.921993651864!2d18.03171409468278!3d-33.07317421427836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34ab5b010473d9%3A0x2f27225f2cd0e231!2sGerimed%20Mobility!5e0!3m2!1sen!2sza!4v1574623516728!5m2!1sen!2sza" />
              </div>
              <div className={`${styles['content']}`}>
                <h2>
                  Gerimed Mobility
                </h2>
                <br />
                <p>Tel: 022 772 1273</p>
                <p>Cell: 082 079 4173</p>
                <p>Shop 3, Madriko Centre,</p>
                <p>Langebaan, 7357</p>
                <br />
                <Button variant='contained' color='primary' onClick={() => this.openPage('/langebaan')}>View</Button>
              </div>
            </div>
          </section>
          <ContactModal open={this.state.dialog.isOpen} onClose={this.closeDialog} />
        </div>
      </Page>
      
    );
  }
}
