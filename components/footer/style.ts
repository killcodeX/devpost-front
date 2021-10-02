import styled from "styled-components";

export const FooterWrapper = styled.footer`
  transition: all 0.5s ease;
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.secondary};
`;

export const UpperFooter = styled.div`
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const LogoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Mulish", sans-serif !important;
  font-size: 34px;
  line-height: 1;
  text-transform: uppercase !important;

  @media (max-width: 480px) {
    font-size: 24px;
    justify-content: center;
  }
`;

export const LogoTitle = styled.span`
  display: block;
  font-weight: 800 !important;
`;

export const LogoSubtitle = styled.span`
  margin-top: 0;
  margin-left: -4px;
  display: block;
  font-weight: 400 !important;
`;

export const FooterSectionTitle = styled.h2`
  color: ${(props) => props.theme.text.primary};
  font-size: 26px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 26px;
  line-height: 26px;
  padding: 0;
  letter-spacing: -0.6px;
  text-align: left;
  @media(max-width:480px){
    font-size: 19px;
    margin-bottom:10px;
  }
`;

export const FooterDescription = styled.span`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor:pointer;
  margin:10px 0;
`;

export const BottomFooter = styled.div`
  font-size: 12px;
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
  border-top: 1px solid #bac1ca;
  padding: 17px 15px;
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.primary};

  @media (max-width: 480px) {
    font-size: 12px;
    justify-content: center;
  }
`;
