import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const TemplateBlock = styled.div`
  width: 300px;
  height: 600px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function Template({ children }) {
  return (
    <>
      <Mobile>
        <TemplateBlock>{children}</TemplateBlock>
      </Mobile>
    </>
  );
}

export default Template;
