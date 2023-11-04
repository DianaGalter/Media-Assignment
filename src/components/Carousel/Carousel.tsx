type CarouselType = {
  carouselProps: {
    showMore: string;
  }
}

export const Carousel = ({ carouselProps }: CarouselType) => {
  const { showMore } = carouselProps;

  return <>{ showMore }</>;
};