import { FC } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import HeaderNav from "../../components/HeaderNav";
import CentralDiv from "../../components/CentralDiv";
import CONSTANTS from "../../constants/constants";

import { HomepageWrapper } from "./Homepage.styles";
const { menu, bottomMenu, homeInfo, copyright } = CONSTANTS;

const Homepage: FC = () => {
  return (
    <HomepageWrapper>
      <HeaderNav menu={menu}></HeaderNav>

      <CentralDiv
        title={homeInfo.title}
        subtitle={homeInfo.subtitle}
        description={homeInfo.description}
      />
      <BottomNavigation
        copyright={copyright}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        menu={bottomMenu}
      ></BottomNavigation>
    </HomepageWrapper>
  );
};

export default Homepage;
