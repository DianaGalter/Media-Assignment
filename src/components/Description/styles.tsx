import styled from '@emotion/styled';

export const Root = styled.div`
  color: #25292D;
  display: flex;
  width: 1024px;

  @media (min-width: 1800px) {
    width: 1168px;
  }
`;

export const TitleBlock = styled.div`
  align-items: flex-start;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  line-height: 28px;
  width: 234px;

  @media (min-width: 1800px) {
    width: 280px;
  }
`;

export const Block = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

export const ItemName = styled.span`
  color: #58626B;
`;