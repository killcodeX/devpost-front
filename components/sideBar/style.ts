import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: ${(props) => props.theme.bg.tertiary};
  color: ${(props) => props.theme.text.primary};
  width: ${(props) => (props.side ? "90%" : "0%")};
  opacity: ${(props) => (props.side ? "1" : "0")};
  height: 100vh;
  padding: 15px;
  border-right: 1px solid #c8beaa;
  transition: all 0.5s ease-out;

  @media (max-width: 480px) {
    top: 0;
  }
`;

export const SideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #bac1ca;
`;

export const IconWrapper = styled.div`
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SideBarTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const SideBarHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
`;

export const CategoryItem = styled.span`
  display: block;
  margin: 25px 10px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 -3px 0 0 #ffcd3f;
  }
`;
