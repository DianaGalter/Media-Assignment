import { Wrapper, Block, Item } from "./styles";

type listProps = {
    name: string;
    value: string;
}
type DescriptionProps = {
    descriptionProps: {
        title: string;
        list: listProps[];
    }
}
export const Description = ({descriptionProps}: DescriptionProps) => {
    const {title, list} = descriptionProps;
    return (
    <Wrapper>
        <Block>{title}</Block>
        <Block><Item>{list[0].name} {list[0].value}</Item></Block>
        <Block>{list[1].name} {list[1].value}</Block>
    </Wrapper>
    );
};