import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Col } from "antd";
import { FC } from "react";
import {
  StyledContractWrap,
  StyledColTitle,
  StyledIconSocial,
  StyledRow,
} from "./style";

const Contract: FC = () => {
  return (
    <StyledContractWrap>
      <StyledRow>
        <StyledColTitle md={8}>Địa chỉ</StyledColTitle>
        <Col md={8}>Số 10 ngỏ 3/2, TP. Hồ Chí Minh</Col>
      </StyledRow>
      <StyledRow>
        <StyledColTitle md={8}>Phương thức thanh toán</StyledColTitle>
        <Col md={8}>Momo</Col>
        <Col md={8}>Internet Banking</Col>
      </StyledRow>
      <StyledRow>
        <StyledColTitle md={8}>Social network</StyledColTitle>
        <Col md={8}>
          <StyledIconSocial>
            <FacebookFilled />
            <InstagramFilled />
          </StyledIconSocial>
        </Col>
      </StyledRow>
    </StyledContractWrap>
  );
};

export default Contract;
