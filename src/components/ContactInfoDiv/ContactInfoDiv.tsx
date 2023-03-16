import { FC } from "react";
import { ContactInfoDivProps } from "./ContactInfoDiv.types";
import {
  StyledContactInfoDiv,
  StyledInfo,
  Image,
} from "./ContactInfoDiv.styles";

import ContactInfo from "../ContactInfo";
import phoneIcon from "../../assets/contactIcons/phoneIcon.jpg";
import emailIcon from "../../assets/contactIcons/mailIcon.jpg";
import locationIcon from "../../assets/contactIcons/locationIcon.jpg";
import CONSTANTS from "../../constants/constants";
const { phone, location, mail } = CONSTANTS;

const ContactInfoDiv: FC<ContactInfoDivProps> = ({
  children,
  subtitle = "",
  description = "",
  ...props
}) => {
  return (
    <StyledContactInfoDiv>
      <Image src={phoneIcon}></Image>
      <StyledInfo>
        <ContactInfo
          title={phone.title}
          description={phone.description}
        ></ContactInfo>
      </StyledInfo>
      <Image src={emailIcon}></Image>
      <StyledInfo>
        <ContactInfo
          title={mail.title}
          description={mail.description}
        ></ContactInfo>
      </StyledInfo>
      <Image src={locationIcon}></Image>
      <StyledInfo>
        <ContactInfo
          title={location.title}
          description={location.description}
        ></ContactInfo>
      </StyledInfo>
    </StyledContactInfoDiv>
  );
};

export default ContactInfoDiv;
