import { FC } from "react";
import BottomNavigation from "../../components/BottomNavigation";
import SkillsInfoDiv from "../../components/SkillsInfoDiv";
import SkillsDetailsDiv from "../../components/SkillsDetailsDiv";
import HeaderNav from "../../components/HeaderNav";
import TitleDiv from "../../components/TitleDiv";
import MainDiv from "../../components/MainDiv";
import CONSTANTS from "../../constants/constants";

import Component1 from "../../components/Component1";
import Component2 from "../../components/Component2";
import { FrontendWrapper } from "./Frontend.styles";
const { menu, bottomMenu, homeTabs, copyright, frontendTitles } = CONSTANTS;

const Frontend: FC = () => {
  return (
    <FrontendWrapper>
      <HeaderNav menu={menu}></HeaderNav>
      <TitleDiv title={homeTabs.frontEndSkills}></TitleDiv>
      <MainDiv
        component1={
          <Component1
            isVertical={false}
            title={frontendTitles.title}
            infoComponent={<SkillsInfoDiv page={"frontend"}></SkillsInfoDiv>}
          />
        }
        component2={
          <Component2
            isVertical={false}
            title={frontendTitles.subtitle}
            skillsComponent={
              <SkillsDetailsDiv page={"frontend"}></SkillsDetailsDiv>
            }
          />
        }
        display={"horizontal"}
      ></MainDiv>

      <BottomNavigation
        copyright={copyright}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        menu={bottomMenu}
      ></BottomNavigation>
    </FrontendWrapper>
  );
};

export default Frontend;
