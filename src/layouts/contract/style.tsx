/* eslint-disable react/react-in-jsx-scope */
import { Col, Row } from "antd";
import styled, {
  themeGet,
  device,
  tinycolor,
  css,
} from "../../helpers/styled/index";

export const StyledContractWrap = styled.div`
  font-size: 20px;
  font-family: ${themeGet("fonts.interUi")};
  letter-spacing: 0.3px;
  padding: 15px 25px;
  background-color: ${themeGet("colors.gray50")};
  color: ${themeGet("colors.gray950")};
  border-top: 1px solid ${themeGet("colors.border")};
  margin-bottom: 1rem;
  ${device.large} {
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: center;
  }
  ${(props) =>
    props.theme.name === "cool" &&
    css`
      border-top-color: transparent;
      box-shadow: 0 0 25px
        ${tinycolor(themeGet("colors.skinUi01")(props))
          .setAlpha(0.1)
          .toRgbString()};
    `}
  ${(props) =>
    props.theme.name === "dark" &&
    css`
      background-color: ${themeGet("colors.gray900")};
      border-top-width: 0;

      a {
        color: ${themeGet("colors.gray500")};
        &:hover,
        &:focus {
          color: #fff;
        }
      }
    `}
`;

export const StyledColTitle = styled(({ ...rest }) => <Col {...rest} />)`
  font-size: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: ${themeGet("fonts.heading")};
  letter-spacing: 0.3px;
  color: ${themeGet("colors.light")};
  font-weight: 600;
`;

export const StyledRow = styled(({ ...rest }) => <Row {...rest} />)`
  padding-top: 10px;
  ${device.large} {
    padding-top: 0;
  }
`;

export const StyledIconSocial = styled.div`
  display: flex;
  grid-column-gap: 5px;
  justify-content: center;
  align-items: stretch;
`;
