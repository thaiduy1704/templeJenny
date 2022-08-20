import React from "react";
import Contract from "../contract";
import { StyledFooter, StyledFooterLeft } from "./style";

const Footer: React.FC = () => {
  return (
    <>
      <Contract />
      <StyledFooter>
        <StyledFooterLeft>
          <span>&copy; {new Date().getFullYear()} - Kyth Clothes </span>
        </StyledFooterLeft>
      </StyledFooter>
    </>
  );
};

export default Footer;
