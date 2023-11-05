import { Root, Slider, ImageList, SliderWrapper, Control, ImageItem, ShowMore } from "./styles";
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

  return (
    <Root>
      <Slider>
        <Image
          src="/assets/Gallery/1.png"
          layout="fill"
          alt="Car image"
        />
        <SliderWrapper>
          <Control>
            <Image
              src="/assets/Gallery/prev.svg"
              height={16}
              width={16}
              alt="Show previous image"
            />
          </Control>
          <Control>
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
        <ImageItem>
          <Image
            src="/assets/Gallery/2.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ImageItem>
          <Image
            src="/assets/Gallery/3.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ImageItem>
          <Image
            src="/assets/Gallery/4.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ImageItem>
          <Image
            src="/assets/Gallery/5.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ImageItem>
          <Image
            src="/assets/Gallery/6.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ImageItem>
          <Image
            src="/assets/Gallery/7.png"
            layout="fill"
            alt="Car image preview"
          />
        </ImageItem>
        <ShowMore>{showMore}</ShowMore>
      </ImageList>
    </Root>
  );
};