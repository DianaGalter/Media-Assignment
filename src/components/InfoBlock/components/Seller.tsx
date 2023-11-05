import styled from '@emotion/styled';
import Image from 'next/image';

const SellerBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: var(--text-text-gray-light, #969CA2);

  font-size: 14px;
  line-height: 22px;
`;

const Name = styled.span`
  color: var(--text-text-base, #25292D);

  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

const Ads = styled.a`
  color: var(--primary-primary-text, #0D4FDC);

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

type sellerProps = {
  seller: {
    title: string;
    name: string;
    ads: string;
  }
}

export const Seller = ({ seller }: sellerProps) => {
  const { title, name, ads } = seller;

  return (
    <SellerBlock>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Ads>{ads}</Ads>
      <Image
        src="/assets/store.png"
        height={48}
        width={48}
        alt="Store logo"
      />
    </SellerBlock>
  );
};