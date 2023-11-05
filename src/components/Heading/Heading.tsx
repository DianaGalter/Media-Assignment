import { Root, Header, SubHeader } from "./styles";
import { Statistics } from "./Statistics";

type HeadingProps = {
  headingData: {
    title: string;
    subtitle: string;
    statistics: {
      views: string;
      favorites: string;
    }
  };
};

export const Heading = ({ headingData } : HeadingProps) => {
  const { title, subtitle, statistics: {views, favorites} } = headingData;

  return (
    <Root>
      <Header>{title}</Header>
      <SubHeader>{subtitle}</SubHeader>
      <Statistics views={views} favorites={favorites} />
    </Root>
  );
};