import styled from "styled-components";

export const ArticleBanner = styled.div`
  position: relative;
  top: -48px;
  width: 100%;
  z-index: 0;
  height: 10%;
  overflow: hidden;
`;

export const ArticleImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 20%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0));
  }
`;

export const ArticleDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ArticleTitle = styled.h2`
  color: #ffffff;
  font-family: Fira Sans !important;
  font-size: 40px !important;
  line-height: 1.2 !important;
  font-weight: 600 !important;

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 260px;
  }
`;

export const AuthorWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-right: 2px;
  }
`;

export const AuthorBy = styled.span`
  padding: 0 8px;
  margin-right: 4px;
  color: #ffffff;
  font-family: Fira Sans !important;
  font-size: 16px !important;
  line-height: 30px !important;
  font-weight: 300 !important;
  letter-spacing: 1px !important;

  @media (max-width: 480px) {
    font-size: 11px !important;
    padding: 0 2px;
  }
`;

export const AuthorName = styled.span`
  color: white;
  font-family: Fira Sans !important;
  font-size: 16px !important;
  line-height: 30px !important;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  box-shadow: inset 0 -3px 0 0 #ffcd3f;

  @media (max-width: 480px) {
    font-size: 12px !important;
  }
`;

export const PostedOn = styled.span`
  color: #ffffff;
  font-family: Fira Sans !important;
  font-size: 16px !important;
  line-height: 30px !important;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;

  @media (max-width: 480px) {
    font-size: 10px !important;
  }
`;

export const PostShare = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  padding-bottom: 40px;
  @media (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export const DividerWrapper = styled.span`
  font-size: 20px;
  padding: 0 15px;
  color: ${(props) => props.theme.text.tertiary};
`;

export const ShareWrapper = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

export const PostFooter = styled.div`
  display: flex;
  border-top: 1px solid bisque;
  padding: 50px 15px;
`;

export const FooterAuthorWrapper = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const FooterAuthorName = styled.span`
  font-size: 28px;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterAuthorEmail = styled.span`
  font-size: 12px !important;
  font-weight: 400 !important;
  margin-bottom: 6px;
  font-size: 16px;
  font-style: italic;
  line-height: 21px;
  color: #444;
`;
