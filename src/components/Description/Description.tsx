import { Wrapper, TitleBlock, Block, Item, ItemName } from "./styles";

type listProps = {
  name: string;
  value: string;
}
type DescriptionProps = {
  descriptionProps: {
    title: string;
    list: listProps[][];
  }
}
export const Description = ({ descriptionProps }: DescriptionProps) => {
  const { title, list } = descriptionProps;

  return (
  <Wrapper>
    <TitleBlock>{ title }</TitleBlock>
    <Block>
      { list[0].map((item, i) => {
        return (
          <Item key={`left-list-${i}`}><ItemName>{item.name}</ItemName> {item.value}</Item>
          )
      }) }
    </Block>
    <Block>
      { list[1].map((item, i) => {
        return (
          <Item key={`right-list-${i}`}><ItemName>{item.name}</ItemName> {item.value}</Item>
          )
      }) }
    </Block>
  </Wrapper>
  );
}