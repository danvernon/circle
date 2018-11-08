import React from 'react';
import { graphql } from 'gatsby';

import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const IndexPage = ( props ) => (
  <Layout>
    <Intro
      title='We build products that provide value to our customers'
      subtitle='We are a multi-disciplined team of designers & developers.'
      heroImage={props.data.imageOne.childImageSharp.fluid}
    />
    <Projects
      workOne={props.data.workOne.childImageSharp.fluid}
      // workTwo={props.data.workTwo.childImageSharp.fluid}
      // workThree={props.data.workThree.childImageSharp.fluid}
      // workFour={props.data.workFour.childImageSharp.fluid}
      // workFive={props.data.workFive.childImageSharp.fluid}
      // workSix={props.data.workSix.childImageSharp.fluid}
    />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "recruitdHero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workOne: file(relativePath: { eq: "work/01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workTwo: file(relativePath: { eq: "work/02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workThree: file(relativePath: { eq: "work/03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workFour: file(relativePath: { eq: "work/04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workFive: file(relativePath: { eq: "work/05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    workSix: file(relativePath: { eq: "work/06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
