import { Root, Slider, ImageList, SliderWrapper, Control, ImageItem, ShowMore } from "./styles";
import { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  galleryData: {
    showMore: string;
  }
}

/**
 * Sample gallery with item's images.
 */
export const Gallery = ({ galleryData }: GalleryProps) => {
  const { showMore } = galleryData;
  const sliderImages = [ 
    {
      src: "/assets/Gallery/1.png",
    },
    {
      src: "/assets/Gallery/2.png",
    },
    {
      src: "/assets/Gallery/3.png",
    },
    {
      src: "/assets/Gallery/4.png",
    },
    {
      src: "/assets/Gallery/5.png",
    },
    {
      src: "/assets/Gallery/6.png",
    },
    {
       src: "/assets/Gallery/7.png",
    },
 ];

  const [activeImageIndex, setCurrent] = useState(0);
  const length = sliderImages.length - 1;

  const nextSlide = () => {
    setCurrent(activeImageIndex === length ? 0 : activeImageIndex + 1);
  };

  const prevSlide = () => {
    setCurrent(activeImageIndex === 0 ? length : activeImageIndex - 1);
  };

  return (
    <Root>
      <Slider>
        {sliderImages.map((currentSlide, index) => {
          if (index === activeImageIndex) {
            return (
              <Image
                key={`slider-item-${index}`}
                src={currentSlide.src}
                fill={true}
                alt="Car image"
              />
            )
          }
        })}
        <SliderWrapper>
          <Control onClick = {prevSlide}>
            <Image
              src="/assets/Gallery/prev.svg"
              height={16}
              width={16}
              alt="Show previous image"
            />
          </Control>
          <Control onClick = {nextSlide}>
            <Image
              src="/assets/Gallery/next.svg"
              height={16}
              width={16}
              alt="Show next image"
            />
          </Control>
        </SliderWrapper>
      </Slider>
      <ImageList>
        {sliderImages.map((currentSlide, i) => {
          return (
            <ImageItem key={`imagelist-item-${i}`}>
              <Image
                src={currentSlide.src}
                fill={true}
                alt="Car image preview"
              />
            </ImageItem>
          )
        })}
        <ShowMore>{showMore}</ShowMore>
      </ImageList>
    </Root>
  );
};