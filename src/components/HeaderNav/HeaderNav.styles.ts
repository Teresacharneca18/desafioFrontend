import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 76px;
  align-items: center;
  background-color: #222222;
  height: 116px;
`;

export const StyledPageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    width: 177px;
    height: 55px;
  }
`;

export const StyledNavItems = styled.div`
  display: flex;
  gap: 0;
`;

export const Image = styled.img`
  width: auto;
`;

export const StyledPageName = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledNavItem = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  font: "Poppins";
  text-decoration: none;
  color: grey;
  padding: 0 30px;
  white-space: nowrap;
  &:last-child {
    border-right: none;
  }
`;
