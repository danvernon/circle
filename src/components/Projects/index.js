import React, { Component } from 'react';
import Img from 'gatsby-image';

import Col from 'react-bootstrap/lib/Col';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

import './index.scss';

export default class Projects extends Component  {
  render() {
    console.log(this.props)

    return (
      <div className='projects'>
        <Container fluid='true' className='projects-container' >
          <Row noGutters='true'>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workOne} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workTwo} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workThree} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workFour} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workFive} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='projects-item'>
                <Img fluid={this.props.workSix} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
