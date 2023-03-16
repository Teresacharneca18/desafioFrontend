import { FC } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import HeaderNav from "../../components/HeaderNav";
import TitleDiv from "../../components/TitleDiv";
import CONSTANTS from "../../constants/constants";

import { PortfolioWrapper, CentralDiv, SecondDiv } from "./Portfolio.styles";
import MainDiv from "../../components/MainDiv";
import Component1 from "../../components/Component1";
import Component2 from "../../components/Component2";
const {
  menu,
  bottomMenu,
  homeTabs,
  copyright,
  centralDivValues,
  secondDivValues,
} = CONSTANTS;

const Portfolio: FC = () => {
  return (
    <PortfolioWrapper>
      <HeaderNav menu={menu}></HeaderNav>
      <TitleDiv title={homeTabs.portfolio}></TitleDiv>
      <MainDiv
        component1={
          <Component1
            infoComponent={
              <CentralDiv>
                {centralDivValues.map((value) => (
                  <div>
                    {value.normal}
                    <span>{value.span}</span>
                  </div>
                ))}
              </CentralDiv>
            }
            isVertical={true}
          ></Component1>
        }
        component2={
          <Component2
            skillsComponent={
              <SecondDiv>
                {secondDivValues.map((value) => (
                  <div>{value.title}</div>
                ))}
              </SecondDiv>
            }
            isVertical={true}
          ></Component2>
        }
        display={"vertical"}
      ></MainDiv>
      <BottomNavigation
        copyright={copyright}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        menu={bottomMenu}
      ></BottomNavigation>
    </PortfolioWrapper>
  );
};

export default Portfolio;
