import styled from "@emotion/styled";

export const OfferRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const Price = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
`;

export const PriceTag = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: #D3FFD7;
`;

export const ContactsButton = styled.button`
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

export const SellerRoot = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const StoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

export const StoreTitle = styled.span`
  color: #969CA2;

  font-size: 14px;
  line-height: 22px;
`;

export const StoreName = styled.span`
  color: #25292D;

  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

export const StoreAds = styled.a`
  color: #0D4FDC;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

export const ButtonStackRoot = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
`;

export const Button = styled.button`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 12px;
  border: 1px solid #D3D6D9;
  background: #FFF;
`;

export const Menu = styled(Button)`
  flex: 0;
`;