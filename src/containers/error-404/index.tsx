import { FC } from "react";
import { StyledWrap, StyledImg, StyledTitle, StyledSubTitle } from "./style";
import ErrorImage from "../../assets/image/404-v1.png";
import history from "../../utils/history";

const ErrorContainer: FC = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={ErrorImage} alt="404" />
            </StyledImg>
            <StyledTitle>404 Page Not Found</StyledTitle>
            <StyledSubTitle>Oopps. The requested URL {history.location.pathname} doesn&apos;t exist.</StyledSubTitle>
        </StyledWrap>
    );
};

export default ErrorContainer;
