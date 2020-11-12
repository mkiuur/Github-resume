import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;
      return <img src={require('../../images/' + filename)}
        className={"rounded shadow-lg"}
        alt={alt} 
        style={{maxWidth:600, maxHeight:400}}/>;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
