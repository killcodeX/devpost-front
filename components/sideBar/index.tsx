import React from "react";
import Link from "next/link";
import { CgFormatRight } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { getSideOpen } from "../../redux/actions/actions";
import useWindowWidth from "../../helpers/useWindowsize";
import {
  SidebarWrapper,
  SideHeader,
  SideBarTitle,
  IconWrapper,
  CategoriesWrapper,
  CategoryItem
} from "./style";

export default function Sidebar({categories}) {
  const dispatch = useDispatch();
  const side = useSelector((state: any) => state.side);
  //const categories = useSelector((state: any) => state.categories);

  return (
    <SidebarWrapper side={side}>
      <SideHeader>
        <SideBarTitle>Side Bar</SideBarTitle>
        <IconWrapper onClick={() => dispatch(getSideOpen())}>
          <CgFormatRight />
        </IconWrapper>
      </SideHeader>
      <CategoriesWrapper>
        {categories.map((category) => {
          return (
            <CategoryItem key={category.id}>
              <Link as={`/category/${category.slug}`} href="/category/[id]">
                <a className="uk-link-reset">{category.name}</a>
              </Link>
            </CategoryItem>
          );
        })}
      </CategoriesWrapper>
    </SidebarWrapper>
  );
}
