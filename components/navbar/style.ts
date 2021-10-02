import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  transition: all 0.5s ease;
  //border-bottom: 1px solid #bac1ca;
  padding: 17px 20px;
  box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 8%);
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.primary};

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-items: flex-start;
  font-family: "Mulish", sans-serif !important;
  font-size: 27px !important;
  line-height: 1 !important;
  text-transform: uppercase !important;
  cursor: pointer;
`;

export const LogoTitle = styled.span`
  display: block;
  font-weight: 800 !important;
`;

export const LogoSubtitle = styled.span`
  margin-top: 0;
  margin-left: -2px;
  display: block;
  font-weight: 400 !important;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const CategoriesWrapper = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

export const CategoryItem = styled.span`
  margin: 0 25px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 -3px 0 0 #ffcd3f;
  }
`;

export const ThemeWrapper = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  font-size: 29px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
