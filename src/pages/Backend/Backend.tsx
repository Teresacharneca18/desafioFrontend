import { FC } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import HeaderNav from "../../components/HeaderNav";
import SkillsDetailsDiv from "../../components/SkillsDetailsDiv";
import SkillsInfoDiv from "../../components/SkillsInfoDiv";
import TitleDiv from "../../components/TitleDiv";
import MainDiv from "../../components/MainDiv";
import CONSTANTS from "../../constants/constants";

import { BackendWrapper } from "./Backend.styles";
import Component1 from "../../components/Component1";
import Component2 from "../../components/Component2";

const { menu, bottomMenu, homeTabs, copyright, backendTitles } = CONSTANTS;

const Backend: FC = () => {
  return (
    <BackendWrapper>
      <HeaderNav menu={menu}></HeaderNav>
      <TitleDiv title={homeTabs.backEndSkills}></TitleDiv>
      <MainDiv
        component1={
          <Component1
            isVertical={false}
            title={backendTitles.title}
            infoComponent={<SkillsInfoDiv page={"backend"}></SkillsInfoDiv>}
          />
        }
        component2={
          <Component2
            isVertical={false}
            title={backendTitles.subtitle}
            skillsComponent={
              <SkillsDetailsDiv page={"backend"}></SkillsDetailsDiv>
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
    </BackendWrapper>
  );
};

export default Backend;
