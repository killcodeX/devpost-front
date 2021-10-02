import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 20px 0;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #eaeaea;
`;
export const CardUpper = styled.div``;

export const CardLower = styled.div`
  padding: 20px 15px;
  color: ${(props) => props.theme.text.primary};
  background: ${(props) => props.theme.bg.secondary};
`;

export const ArticleDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ArticleCategory = styled.span`
  font-size: 18px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ArticleDate = styled.span`
  color: #ffcd3f;
  font-size: 14px;
  line-height: 1;
  font-weight: 400 t;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 20px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ArticleAuthor = styled.span`
  font-size: 12px;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ArticleTitle = styled.div`
  display: inline;
  font-size: 19px;
  font-weight: 800;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 -3px 0 0 #ffcd3f;
  }
`;

export const ArticleDescription = styled.div`
  color: ${(props) => props.theme.text.tertiary};
  font-family: Merriweather !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  font-weight: 300 !important;
  margin-top: 10px;
`;
