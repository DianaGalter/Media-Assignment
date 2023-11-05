import { Root, Header, SubHeader, Address, Statistics, Icon, StatsBlock } from "./styles";
type HeadingProps = {
  headingData: {
    title: string;
    address: string;
    statistics: {
      views: string;
      favorites: string;
    }
  };
};

export const Heading = ({ headingData } : HeadingProps) => {
  const { title, address, statistics: {views, favorites} } = headingData;

  return (
    <Root>
      <Header>{title}</Header>
      <SubHeader>
        <Address>{address}</Address>
        <Statistics>
          <StatsBlock>
            <Icon
              src="/assets/Heading/views.svg"
              height={16}
              width={16}
              alt="How many views"
            />
            {views}
          </StatsBlock>
          <StatsBlock>
            <Icon
              src="/assets/Heading/liked.svg"
              height={16}
              width={16}
              alt="How many likes"
            />
            {favorites}
          </StatsBlock>
        </Statistics>
      </SubHeader>
    </Root>
  );
};