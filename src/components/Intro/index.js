import React, { Component } from 'react';
import Img from 'gatsby-image'

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

import './index.scss';

export default class Intro extends Component  {
  render() {
    // console.log(this.props)

    return (
      <div className='intro'>
        <Container>
          <Row className='intro-container'>
            <Col xs={12} md={6}>
              <h1 className='intro-title'>
                {this.props.title}
              </h1>
              <span className='intro-subtitle'>
                {this.props.subtitle}
              </span>
            </Col>
            <Col xs={12} md={6}>
              <Img fluid={this.props.heroImage} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
