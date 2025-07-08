import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery3Slides(props) {
  const { slide1, slide2, slide3 } = props;

  ImagesGallery3Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: "Piscina grande em resort",
      thumbnailAlt: "Piscina grande em resort",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "Piscina",
      thumbnailAlt: "Piscina",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide3,
      thumbnail: slide3,
      originalAlt: "Pessoa sentada na Piscina",
      thumbnailAlt: "Pessoa sentada na Piscina",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
        showThumbnails={false}
        showNav={false}
        showPlayButton={false}
      />
    </div>
  );
}
