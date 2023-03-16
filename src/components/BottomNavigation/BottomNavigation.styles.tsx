import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledBottomNavigation = styled.div`
  display: flex;
  padding-left: 18px;
  align-items: center;
  background-color: #222222;
  height: 76px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-color: grey;
  border-style: solid;
  border-width: 2px;
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

export const StyledCopyright = styled.div`
  position: absolute;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  right: 0;
  align-items: flex-start;
  margin-right: 20px;
`;

export const StyledNavItem = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font: "Poppins";
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 30px;
  white-space: nowrap;
  &:last-child {
    border-right: none;
  }
`;
