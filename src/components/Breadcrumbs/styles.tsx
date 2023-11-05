import styled from "@emotion/styled";
import Image from "next/image";

type Breadcrumb = {
  active?: boolean;
}

export const CrumbWrapper = styled.span`
  display: inline-block;
  height: 22px;
`;

export const Chevron = styled(Image)`
  vertical-align: middle;
`;

export const Breadcrumb = styled.span<Breadcrumb>`
  color: ${props => props.active ? '#25292D' : '#58626B'};
  font-size: 14px;
  line-height: 22px;
`;