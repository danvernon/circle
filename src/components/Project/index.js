import React, { Component } from 'react';
import Img from 'gatsby-image';

import Col from 'react-bootstrap/lib/Col';

import './index.scss';

export default class Project extends Component  {
  render() {

    return (
      <Col xs={12} md={4}>
        <a href={this.props.link} target='_blank' rel="noopener noreferrer">
          <div className='project-item'>
            { this.props.image &&
              <Img fluid={this.props.image} />
            }
            <div className='project-item-hover'>
              <div className='project-item-details'>
                <h3>{this.props.title}</h3>
                <span>{this.props.type}</span>
              </div>
            </div>
          </div>
        </a>
      </Col>
    )
  }
}
