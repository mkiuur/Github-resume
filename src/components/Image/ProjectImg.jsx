import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import '../../Imports/ImportGifs';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      // if (!image) return null;
      console.log(filename);

      var file_extention = filename.substring(filename.length - 4, filename.length);
      switch (file_extention) {
        case '.jpg':
        case '.png':
        case '.gif':
          return (
            <img
              src={require('../../images/' + filename)}
              style={{ maxWidth: 600, maxHeight: 400 }}
            />
          );
        default:
          return (
            <iframe
              width="560"
              height="315"
              src={filename}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          );
      }
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
