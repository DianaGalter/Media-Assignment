import styled from "@emotion/styled";

export const OfferRoot = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Price = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
`;

export const PriceTag = styled.div`
  align-items: center;
  background: #D3FFD7;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding: 4px 8px;
`;

export const ContactsButton = styled.button`
  align-items: center;
  align-self: stretch;
  background: #0D4FDC;
  border: none;
  border-radius: 12px;
  color: #FFF;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  gap: 8px;
  justify-content: center;
  line-height: 26px;
  padding: 16px 24px;
  text-align: center;
  width: 100%;
`;

export const SellerRoot = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  gap: 16px;
`;

export const StoreWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
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
  align-items: flex-start;
  align-self: stretch;
  border-radius: 24px;
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  align-items: center;
  background: #FFF;
  border: 1px solid #D3D6D9;
  border-radius: 12px;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  padding: 12px;
`;

export const Menu = styled(Button)`
  flex: 0;
`;