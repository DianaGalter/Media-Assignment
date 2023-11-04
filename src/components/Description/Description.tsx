import { Wrapper, Block, Item } from "./styles";

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
    <Block>{ title }</Block>
    <Block>
      { list[0].map((item, i) => <Item key={`left-list-${i}`}>{ item.name } { item.value }</Item>) }
    </Block>
    <Block>
      { list[1].map((item, i) => <Item key={`right-list-${i}`}>{ item.name } { item.value }</Item>) }
    </Block>
  </Wrapper>
  );
}