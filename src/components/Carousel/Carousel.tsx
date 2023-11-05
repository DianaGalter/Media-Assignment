type CarouselType = {
  carouselData: {
    showMore: string;
  }
}

export const Carousel = ({ carouselData }: CarouselType) => {
  const { showMore } = carouselData;

  return <>{ showMore }</>;
};