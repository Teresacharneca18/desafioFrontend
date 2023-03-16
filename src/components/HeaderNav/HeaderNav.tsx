import { FC } from "react";
import {
  StyledHeaderNav,
  StyledNavItem,
  StyledNavItems,
  StyledPageInfo,
  Image,
} from "./HeaderNav.styles";
import { HeaderNavProps } from "./HeaderNav.types";
import logoIcon from "../../assets/logoIcon.svg";
const HeaderNav: FC<HeaderNavProps> = ({ menu = [], ...props }) => {
  return (
    <StyledHeaderNav {...props} data-automation-id="nav">
      <StyledPageInfo>
        <Image src={logoIcon}></Image>
      </StyledPageInfo>
      <StyledNavItems>
        {menu.map(({ text, url }) => (
          <StyledNavItem key={url} to={url} data-automation-id={text}>
            {text}
          </StyledNavItem>
        ))}
      </StyledNavItems>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
