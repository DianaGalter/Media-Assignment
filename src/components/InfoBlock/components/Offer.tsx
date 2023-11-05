import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Price = styled.h3`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`;

const Tag = styled.div`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background: #D3FFD7;
`;

const Button = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  border-radius: 12px;
  background: #0D4FDC;
  width: 100%;

  color: #FFF;
  text-align: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

type offerProps = {
  offer: {
    price: string;
    tag: string;
    buttonText: string;
  }
}

export const Offer = ({ offer }: offerProps) => {
  const { price, tag, buttonText } = offer;

  return (
    <Root>
      <Price>{price}</Price>
      <Tag>{tag}</Tag>
      <Button>{buttonText}</Button>
    </Root>
  );
};