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
    padding: var(--space-4, 4px) var(--space-8, 8px);
    justify-content: center;
    align-items: center;

    border-radius: var(--border-radius-round, 100px);
    background: var(--background-light-bg-green-light, #D3FFD7);
`;

const Button = styled.button`
  display: flex;
  padding: var(--space-16, 16px) var(--space-24, 24px);
  justify-content: center;
  align-items: center;
  gap: var(--space-8, 8px);
  align-self: stretch;
  border: none;
  border-radius: var(--border-radius-12, 12px);
  background: var(--primary-primary-base, #0D4FDC);
  width: 100%;

  color: var(--text-text-white, #FFF);
  text-align: center;

  /* Large/Medium */
  font-family: Golos Text VF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
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