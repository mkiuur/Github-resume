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
      // console.log(image)
      // if (!image) return null;
      console.log(filename)

      var file_extention = filename.substring(filename.length-4,filename.length);
      if (file_extention == ".jpg")
      {
        const imageFluid = image.node.childImageSharp.fluid;
        console.log("image loaded")
        return <Img alt={alt} fluid={imageFluid} />;
      }
      else if (file_extention == ".gif")
      {
        console.log("gif loaded")
        return <img src={require ('../../images/'+filename)} />;
      }
      else
      {
        console.log("video loaded " + filename)

        if(filename.includes("youtube.com/"))
        {
          return <ReactPlayer
          url={filename} 
          controls={true} />;
        }
        else if(filename.includes("drive.google.com"))
        {
          return <iframe src={filename} 
          width={"640"} 
          height={"400"}
          >
          </iframe>;
        }
      }
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
