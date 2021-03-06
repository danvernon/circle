import React, { Component } from 'react';

import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';

import Project from '../Project';

import './index.scss';

export default class Projects extends Component  {
  render() {
    console.log(this.props)

    return (
      <div className='projects'>
        <Container fluid='true' className='projects-container' >
          <Row noGutters='true'>
            <Project
              image={this.props.workOne}
              link='https://www.tifosy.com'
              title='Tifosy'
              type='Product Design, Web Development'
            />
            <Project
              image={this.props.workTwo}
              link='https://www.customchurchapps.com'
              title='Custom Church Apps'
              type='Product Design, Web Development, CMS'
            />
            <Project
              image={this.props.workThree}
              link='https://itunes.apple.com/gb/app/freesupertips/id1154565903?mt=8'
              title='FreeSuperTips'
              type='Product Design, iOS Development'
            />
            <Project
              image={this.props.workFour}
              link='https://www.recruitd.com'
              title='Recruitd'
              type='Product Design, iOS Development, Web Development'
            />
            <Project
              image={this.props.workFive}
            />
            <Project
              image={this.props.workSix}
            />
          </Row>
        </Container>
      </div>
    )
  }
}
