import React, { Component } from 'react';
import { Link } from 'gatsby';

import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';

import './index.scss';

export default class Header extends Component  {

  render() {

    return (
      <header className='header'>
        <Container className='header-container'>
          <h1 className='header-logo'>
            <Link to="/" title="Circle">
              <svg width="141" height="50" viewBox="0 0 141 50" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M25.012 49.962c-6.4 0-12.8-2.45-17.7-7.3-9.75-9.75-9.75-25.6 0-35.35s25.6-9.75 35.35 0a8.45 8.45 0 0 1 0 11.95l-11.7 11.7a8.45 8.45 0 0 1-11.95 0 8.45 8.45 0 0 1 0-11.95 8.45 8.45 0 0 1 11.95 0l1.25 1.25-2.85 2.85-1.25-1.25a4.436 4.436 0 0 0-6.3 0 4.436 4.436 0 0 0 0 6.3 4.436 4.436 0 0 0 6.3 0l11.7-11.7a4.436 4.436 0 0 0 0-6.3c-8.2-8.2-21.5-8.2-29.7 0s-8.2 21.5 0 29.7 21.5 8.2 29.7 0a4.436 4.436 0 0 0 0-6.3l-3.85-3.85 2.85-2.85 3.85 3.85a8.45 8.45 0 0 1 0 11.95c-4.8 4.85-11.2 7.3-17.65 7.3z" fill="#FE8060"/>
                  <g fill="#FFFFFF">
                    <path d="M61.9 16.75c4.05 0 6.65 2.15 7.2 5.7h-3.55c-.45-1.7-1.7-2.65-3.65-2.65-2.75 0-4.4 2.15-4.4 5.2 0 3.05 1.7 5.2 4.45 5.2 2.05 0 3.15-.95 3.6-2.65h3.55c-.6 3.55-3.2 5.7-7.25 5.7-5.15 0-8.05-3.55-8.05-8.25 0-4.65 3.1-8.25 8.1-8.25zM72.25 17.05h3.6V33h-3.6zM79.85 17.05h7.25c3.95 0 6.1 1.95 6.1 5.1 0 2.25-1.15 4.05-3.3 4.85l3.9 6.05h-3.9l-3.55-5.55h-2.9V33h-3.6V17.05zm3.6 2.8v4.85h3.45c1.7 0 2.6-1.05 2.6-2.5 0-1.4-.95-2.3-2.6-2.3h-3.45v-.05zM103.8 16.75c4.05 0 6.65 2.15 7.2 5.7h-3.55c-.45-1.7-1.7-2.65-3.65-2.65-2.75 0-4.4 2.15-4.4 5.2 0 3.05 1.7 5.2 4.45 5.2 2.05 0 3.15-.95 3.6-2.65H111c-.6 3.55-3.2 5.7-7.25 5.7-5.15 0-8.05-3.55-8.05-8.25 0-4.65 3.1-8.25 8.1-8.25zM114.15 17.05h3.6V30h7.55v3h-11.15zM128.45 17.05h11.95V20H132v3.5h6.8v2.75H132v3.85h8.65v2.95H128.4v-16z"/>
                  </g>
                </g>
              </svg>
            </Link>
          </h1>
          <a href='mailto:hello@madebycircle.com'>
            <Button variant='light'>
              Get in touch
            </Button>
          </a>
        </Container>
      </header>
    )
  }
}
