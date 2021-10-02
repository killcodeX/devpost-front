import styled from "styled-components";

export const LayoutWrapper = styled.div`
    position:relative;
`;

export const MainWrapper = styled.main`
    border:1px soild blue;
    padding:50px 0;
    min-height:100vh;
    color: ${(props) => props.theme.text.primary};
    background: ${(props) => props.theme.bg.tertiary};
`;