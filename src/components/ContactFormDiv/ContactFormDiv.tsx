import { FC, useState } from "react";
import IconButton from "../IconButton";

import {
  StyledHorizontalContactFormDiv,
  ContactFormDivContainerHorizontal,
  ContactFormDivContainerVertical,
  StyledVerticalContactFormDiv,
  InputText,
  SelectInput,
} from "./ContactFormDiv.styles";
import { ContactFormDivProps } from "./ContactFormDiv.types";

const ContactFormDiv: FC<ContactFormDivProps> = ({ children, ...props }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleChange1 = (event: any) => {
    // 👇 Get input value from "event"
    setInput1(event.target.value);
  };

  const handleChange2 = (event: any) => {
    // 👇 Get input value from "event"
    setInput2(event.target.value);
  };

  const handleChange3 = (event: any) => {
    // 👇 Get input value from "event"
    setInput3(event.target.value);
  };

  return (
    <StyledHorizontalContactFormDiv {...props}>
      <ContactFormDivContainerHorizontal>
        <StyledVerticalContactFormDiv>
          <ContactFormDivContainerVertical>
            <InputText
              type={"text"}
              id={"input1"}
              onChange={handleChange1}
              placeholder={"Jméno a přijmení"}
            />
          </ContactFormDivContainerVertical>
          <ContactFormDivContainerVertical>
            <InputText
              type={"text"}
              id={"input2"}
              onChange={handleChange2}
              placeholder={"Email"}
            />
          </ContactFormDivContainerVertical>
          <ContactFormDivContainerVertical>
            <SelectInput id={"input4"} placeholder={"Spolupráce"}>
              <option value="opcao1">Spolupráce</option>
              <option value="opcao2">B</option>
              <option value="opcao3">C</option>
            </SelectInput>
          </ContactFormDivContainerVertical>
          <ContactFormDivContainerVertical>
            <IconButton
              style={{ border: "3px solid #007CED" }}
              redirect={""}
              // @ts-ignore
              values={[input1, input2, input3]}
            >
              Odeslat
            </IconButton>
          </ContactFormDivContainerVertical>
        </StyledVerticalContactFormDiv>
      </ContactFormDivContainerHorizontal>
      <ContactFormDivContainerHorizontal>
        <InputText
          style={{ height: "212px" }}
          type={"text"}
          id={"input3"}
          onChange={handleChange3}
          placeholder={"Jméno a přijmení"}
        />
      </ContactFormDivContainerHorizontal>
    </StyledHorizontalContactFormDiv>
  );
};

export default ContactFormDiv;
