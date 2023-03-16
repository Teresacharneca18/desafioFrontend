import { FC } from "react";
import BottomNavigation from "../../components/BottomNavigation";

import HeaderNav from "../../components/HeaderNav";
import TitleDiv from "../../components/TitleDiv";
import CONSTANTS from "../../constants/constants";
import mapsImage from "../../assets/maps.jpg";
import {
  ContactWrapper,
  Map,
  MainDiv,
  StyledMainDiv,
  FormMainDiv,
  StyledVerticalDiv,
} from "./Contact.styles";
import ContactInfoDiv from "../../components/ContactInfoDiv";
import ContactFormDiv from "../../components/ContactFormDiv/ContactFormDiv";
import Subtitle from "../../components/Subtitle";
const { menu, bottomMenu, homeTabs, copyright, contactTitle } = CONSTANTS;

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <HeaderNav menu={menu}></HeaderNav>
      <TitleDiv title={homeTabs.contact}></TitleDiv>
      <Map src={mapsImage}></Map>
      <MainDiv>
        <StyledMainDiv>
          <ContactInfoDiv page={"contact"}></ContactInfoDiv>
        </StyledMainDiv>
        <StyledMainDiv>
          <FormMainDiv>
            <StyledVerticalDiv>
              <Subtitle title={contactTitle.title}></Subtitle>
            </StyledVerticalDiv>
            <StyledVerticalDiv>
              <ContactFormDiv></ContactFormDiv>
            </StyledVerticalDiv>
          </FormMainDiv>
        </StyledMainDiv>
      </MainDiv>

      <BottomNavigation
        copyright={copyright}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        menu={bottomMenu}
      ></BottomNavigation>
    </ContactWrapper>
  );
};

export default Contact;
