import React from "react";
import ImageGallery from "react-image-gallery";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

function GalleryAbout() {
  const images = [
    {
      original: content.texts.about.galeria.img1.img,
      thumbnail: content.texts.about.galeria.img1.img,
      alt: content.texts.about.galeria.img1.alt,
    },
    {
      original: content.texts.about.galeria.img2.img,
      thumbnail: content.texts.about.galeria.img2.img,
      alt: content.texts.about.galeria.img2.alt,
    },
    {
      original: content.texts.about.galeria.img3.img,
      thumbnail: content.texts.about.galeria.img3.img,
      alt: content.texts.about.galeria.img3.alt,
    },
    {
      original: content.texts.about.galeria.img4.img,
      thumbnail: content.texts.about.galeria.img4.img,
      alt: content.texts.about.galeria.img4.alt,
    },
    {
      original: content.texts.about.galeria.img5.img,
      thumbnail: content.texts.about.galeria.img5.img,
      alt: content.texts.about.galeria.img5.alt,
    },
  ];
  return (
    <div className="flex bg-bgSectionLight justify-center w-full h-auto rounded-[20px]">
      <MotionDivDownToUp className="relative flex justify-center w-full ">
        <div className="w-full">
          <ImageGallery
            items={images}
            showNav={false} // Ativando a navegação
            showFullscreenButton={false} // Desativando botão de tela cheia
            useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
            showBullets={false}
            showPlayButton={false} // Remove o botão de play
            showThumbnails={false} // Remove as miniaturas
            autoPlay={true}
            additionalClass="custom-gallery"
          />
          <style>
            {`
                    .custom-gallery .image-gallery-slide img {
                      height: 300px; 
                      width: 100%;
                      object-fit: cover;
                      border-radius: 10px;
                    }

                     @media (min-width: 640px) and (max-width: 1023px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 800px;
                         
                        }
                      }

                      @media (min-width: 1024px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 470px;
                        }
                      }


                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
          </style>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}

export default GalleryAbout;
