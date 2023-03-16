import { FC } from "react";
import {
  StyledBottomNavigation,
  StyledNavItem,
  StyledNavItems,
  StyledCopyright,
  StyledPageInfo,
} from "./BottomNavigation.styles";
import { BottomNavigationProps } from "./BottomNavigation.types";

const BottomNavigation: FC<BottomNavigationProps> = ({
  copyright = "",

  handleLogout = () => {},
  menu = [],
  ...props
}) => {
  return (
    <StyledBottomNavigation {...props} data-automation-id="nav">
      <StyledPageInfo>
        <StyledCopyright>{copyright && <h3>{copyright}</h3>}</StyledCopyright>
      </StyledPageInfo>
      <StyledNavItems>
        {menu.map(({ text, url }) => (
          <StyledNavItem key={url} to={url} data-automation-id={text}>
            {text}
          </StyledNavItem>
        ))}
      </StyledNavItems>
    </StyledBottomNavigation>
  );
};

export default BottomNavigation;
