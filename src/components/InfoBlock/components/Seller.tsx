import { SellerRoot, StoreWrapper, StoreTitle, StoreName, StoreAds } from './styles';
import Image from 'next/image';

type sellerProps = {
  seller: {
    title: string;
    name: string;
    ads: string;
  }
}

/**
 * Seller's name, short description and logo.
 */
export const Seller = ({ seller }: sellerProps) => {
  const { title, name, ads } = seller;

  return (
    <SellerRoot>
      <StoreWrapper>
        <StoreTitle>{title}</StoreTitle>
        <StoreName>{name}</StoreName>
        <StoreAds>{ads}</StoreAds>
      </StoreWrapper>
      <Image
        src="/assets/InfoBlock/store.png"
        height={48}
        width={48}
        alt="Store logo"
      />
    </SellerRoot>
  );
};