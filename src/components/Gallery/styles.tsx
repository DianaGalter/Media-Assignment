import styled from "@emotion/styled";
export const Root = styled.div`
  align-items: flex-start;
  border-radius:24px;
  display: flex;
  flex-shrink: 0;
  gap: 6px;
  height: 456px;
  margin: 20px 0;
  overflow: hidden;
  width: 1024px;

  @media (min-width: 1800px) {
    gap: 8px;
    height: 520px;
    width: 1168px;
  }
`;

export const Slider = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 456px;
  position: relative;
  width: 624px;

  @media (min-width: 1800px) {
    height: 520px;
    width: 732px;
  }
`;

export const SliderWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  position: absolute;
  top: 240px;
  width: 624px;

  @media (min-width: 1800px) {
    width: 732px;
  }
`;

export const Control = styled.div`
  align-items: center;
  background: #FFF;
  border-radius: 100px;
  box-shadow: 0px 2px 2px 0px rgba(16, 30, 44, 0.04), 0px 4px 12px 0px rgba(16, 30, 44, 0.08);
  display: flex;
  flex-shrink: 0;
  height: 40px;
  justify-content: center;
  padding: 8px;
  width: 40px;
`;

export const ImageList = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1 0 0;
  flex-wrap: wrap;
  gap: 6px 6px;
  position: relative;

  @media (min-width: 1800px) {
    gap: 8px 8px;
  }
`;

export const ImageItem = styled.div`
  height: 148px;
  position: relative;
  width: 194px;

  @media (min-width: 1800px) {
    height: 168px;
    width: 210px;
  }
`;

export const ShowMore = styled.button`
  background: #03143799;
  border: none;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 148px;
  line-height: 22px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 194px;

  @media (min-width: 1800px) {
    height: 168px;
    width: 210px;
  }
`;