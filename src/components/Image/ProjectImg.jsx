import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import "../../Imports/ImportGifs"
import ReactPlayer from "react-player"


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

      if (!image) return null;
      console.log(filename)

      // var file_extention = filename.substring(filename.length-4,filename.length);
      // if (file_extention == ".jpg")
      // {
      //   const imageFluid = image.node.childImageSharp.fluid;
      //   console.log("image loaded")
      //   return <Img alt={alt} fluid={imageFluid} />;
      // }
      // else if (file_extention == ".gif")
      // {
      //   console.log("gif loaded")
      //   return <img src={require ('../../images/'+filename)} />;
      // }
      // else
      // {
      //   console.log("gif loaded " + filename)
      //   return <ReactPlayer
      //   url="https://www.youtube.com/watch?v=4Hg1Kudd_x4&ab_channel=HomeworkRadio"
      //   // url={__filename}
      //   controls='true'
      //   />;
      // }

      try
      {
        const imageFluid = image.node.childImageSharp.fluid;
        console.log("image loaded " + filename)
        return <Img alt={alt} fluid={imageFluid} />;
      }
      // catch(e)
      // {
      //   console.log("gif loaded " + filename)
      //   return <img src={require ('../../images/'+filename)} alt="Otter dancing with a fish" />;
      // }
      catch(e)
      {
        console.log("gif loaded " + filename)
        return <ReactPlayer
        url="https://www.youtube.com/watch?v=4Hg1Kudd_x4&ab_channel=HomeworkRadio" 
        controls=true />;
      }
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
