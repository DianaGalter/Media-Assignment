import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const TitleBlock = styled.div`
  display: flex;
  width: 280px;
  align-items: flex-start;
  gap: 10px;

  color: var(--text-text-base, #25292D);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-8, 8px);
  flex: 1 0 0;
`;

export const Item = styled.span`
  color: var(--text-text-base, #25292D);

  font-size: 16px;
  line-height: 24px;
`;

export const ItemName = styled.span`
  color: var(--text-text-gray, #58626B);
`;