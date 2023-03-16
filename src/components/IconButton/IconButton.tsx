import { FC } from "react";
import { StyledIconButton } from "./IconButton.styles";
import { IIconButton } from "./IconButton.types";
import { useNavigate } from "react-router-dom";

const IconButton: FC<IIconButton> = ({
  children,
  redirect,
  values,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/" + redirect);
  };

  const handlerAlert = () => {
    values ? window.alert("Value1: " + values[0]) : console.log("no values");
  };

  return (
    <StyledIconButton {...props} onClick={values ? handlerAlert : handleClick}>
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
