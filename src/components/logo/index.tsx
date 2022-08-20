import { FC } from "react";
import loginImage from "../../assets/image/Logo-v3.png";
import { StyledLogo } from "./style";

const Logo: FC = () => {
    return (
        <StyledLogo path="/">
            <>
                <img src={loginImage} alt="Logo" style={{ position: "absolute", top: "-14px" }} />
            </>
        </StyledLogo>
    );
};

export default Logo;
