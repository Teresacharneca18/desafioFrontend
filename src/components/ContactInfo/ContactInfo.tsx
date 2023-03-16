import { FC } from "react";
import { ContactInfoProps } from "./ContactInfo.types";
import {
  StyledContactInfo,
  TitleContactInfo,
  StyledContactDescriotionInfo,
} from "./ContactInfo.styles";

const ContactInfo: FC<ContactInfoProps> = ({
  children,
  title,
  description,
  ...props
}) => {
  return (
    <StyledContactInfo {...props}>
      <TitleContactInfo>{title}</TitleContactInfo>
      <StyledContactDescriotionInfo>
        <p>{description}</p>
      </StyledContactDescriotionInfo>
    </StyledContactInfo>
  );
};

export default ContactInfo;
