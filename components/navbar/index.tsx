import React from "react";
import Link from "next/link";
import { CgFormatJustify } from "react-icons/cg";
import {
  HeaderWrapper,
  HeadContainer,
  LogoWrapper,
  LogoTitle,
  LogoSubtitle,
  RightContainer,
  CategoriesWrapper,
  CategoryItem,
  ThemeWrapper,
  IconWrapper,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getThemeChange, getSideOpen } from "../../redux/actions/actions";
import useWindowWidth from "../../helpers/useWindowsize";

export default function Navbar({ categories }) { //
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  //const categories = useSelector((state: any) => state.categories);
  const width = useWindowWidth();

  return (
    <HeaderWrapper>
      <HeadContainer className="container">
        <Link href="/">
          <LogoWrapper>
            <LogoTitle>Dev</LogoTitle>
            <LogoSubtitle>Post</LogoSubtitle>
          </LogoWrapper>
        </Link>
        <RightContainer>
          {width > 680 ? (
            <CategoriesWrapper>
              {categories.map((category) => {
                return (
                  <CategoryItem key={category.id}>
                    <Link
                      as={`/category/${category.slug}`}
                      href="/category/[id]"
                    >
                      <a className="uk-link-reset">{category.name}</a>
                    </Link>
                  </CategoryItem>
                );
              })}
            </CategoriesWrapper>
          ) : null}
          <ThemeWrapper onClick={() => dispatch(getThemeChange())}>
            {theme ? "☀️" : "🌙"}
          </ThemeWrapper>
          {width > 480 ? null : (
            <IconWrapper onClick={() => dispatch(getSideOpen())}>
              <CgFormatJustify />
            </IconWrapper>
          )}
        </RightContainer>
      </HeadContainer>
    </HeaderWrapper>
  );
}
