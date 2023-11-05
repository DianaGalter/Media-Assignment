import styled from '@emotion/styled';
import Image from 'next/image';

export const Root = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
  width: 1024px;

  @media (min-width: 1800px) {
    width: 1168px;
  }
`;

export const Header = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`;

export const SubHeader = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.span`
  align-items: baseline;
  display: flex;
  gap: 8px;
`;

export const Statistics = styled.span`
  color: #969CA2;
  display: inline-flex;
  font-size: 14px;
  gap: 4px;
  height: 22px;
  line-height: 22px;
`;

export const Icon = styled(Image)`
  vertical-align: text-bottom;
`;

export const StatsBlock = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
`;