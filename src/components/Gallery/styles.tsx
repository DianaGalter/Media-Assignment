import styled from "@emotion/styled";
export const Root = styled.div`
  display: flex;
  width: 1024px;
  height: 456px;
  align-items: flex-start;
  gap: 6px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius:24px;
  margin: 20px 0;

  @media (min-width: 1800px) {
    gap: 8px;
    height: 520px;
    width: 1168px;
  }
`;

export const Slider = styled.div`
  display: flex;
  height: 456px;
  width: 624px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  position: relative;

  @media (min-width: 1800px) {
    height: 520px;
    width: 732px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 624px;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 240px;

  @media (min-width: 1800px) {
    width: 732px;
  }
`;

export const Control = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 100px;
  background: #FFF;

  box-shadow: 0px 2px 2px 0px rgba(16, 30, 44, 0.04), 0px 4px 12px 0px rgba(16, 30, 44, 0.08);
`;

export const ImageList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px 6px;
  flex: 1 0 0;
  align-self: stretch;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 1800px) {
    gap: 8px 8px;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  height: 148px;
  width: 194px;

  @media (min-width: 1800px) {
    height: 168px;
    width: 210px;
  }
`;

export const ShowMore = styled.button`
  right: 0;
  bottom: 0;
  height: 148px;
  width: 194px;
  position: absolute;
  background: #03143799;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #fff;
  border: none;

  @media (min-width: 1800px) {
    height: 168px;
    width: 210px;
  }
`;