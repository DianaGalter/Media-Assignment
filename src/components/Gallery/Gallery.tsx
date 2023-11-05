import { Root, Slider, ImageList, SliderWrapper, Control, ShowMore } from "./styles";
import Image from "next/image";

type GalleryProps = {
  galleryData: {
    showMore: string;
  }
}

export const Gallery = ({ galleryData }: GalleryProps) => {
  const { showMore } = galleryData;

  return (
    <Root>
      <Slider>
        <Image
          src="/assets/Gallery/1.png"
          height={520}
          width={732}
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
        <Image
          src="/assets/Gallery/2.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <Image
          src="/assets/Gallery/3.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <Image
          src="/assets/Gallery/4.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <Image
          src="/assets/Gallery/5.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <Image
          src="/assets/Gallery/6.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <Image
          src="/assets/Gallery/7.png"
          height={168}
          width={210}
          alt="Car image preview"
        />
        <ShowMore>{showMore}</ShowMore>
      </ImageList>
    </Root>
  );
};