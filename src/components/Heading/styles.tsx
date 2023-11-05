import styled from '@emotion/styled';
import Image from 'next/image';

export const Root = styled.div`
  margin-top: 40px;
  display: flex;
  width: 1168px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Header = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const Address = styled.span`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Statistics = styled.span`
  color: #969CA2;
  gap: 4px;
  display: inline-flex;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
`;

export const Icon = styled(Image)`
  vertical-align: text-bottom;
`;

export const StatsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;