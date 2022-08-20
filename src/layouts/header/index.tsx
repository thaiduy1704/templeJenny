import { MenuOutlined } from "@ant-design/icons";
import { FC, useEffect, useCallback, useState } from "react";
import Logo from "../../components/logo";
import { Navbar } from "../../components/navbar/navbar";
import menuData from "../../helpers/menu";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleBody, toggleSidebar } from "../../redux/slices/ui";
import { StyledHeader, StyledNavbarWrap, StyledNavbarMenu, StyleNavbarRight, StyledNavbarElement, StyledNavbarHeader, StyledNavbarBody, StyledMenuBtn, StyledSidebarBtn, StyledLogo } from "./style";

interface IProps {
    hasSidebar?: boolean;
    sidebarLayout?: 1 | 2;
}

const Header: FC<IProps> = ({ hasSidebar, sidebarLayout }) => {
    const dispatch = useAppDispatch();
    const { sidebar, isBody } = useAppSelector((state) => state.ui);

    const [menuOpen, setMenuOpen] = useState(false);
    const sidebarHandler = useCallback(
        (_?: any, isOpen?: "open") => {
            dispatch(toggleSidebar({ isOpen }));
        },
        [dispatch]
    );

    const bodyHandler = useCallback(() => {
        dispatch(toggleBody());
        dispatch(toggleSidebar({ isOpen: "open" }));
    }, [dispatch]);

    const menuHandler = useCallback(() => {
        setMenuOpen((prev) => !prev);
        if (menuOpen) {
            sidebarHandler(undefined, "open");
        }
    }, [menuOpen, sidebarHandler]);

    useEffect(() => {
        return () => {
            sidebarHandler(undefined, "open");
            bodyHandler();
        };
    }, [sidebarHandler, bodyHandler]);

    return (
        <>
            <StyledHeader>
                {hasSidebar && sidebarLayout === 1 && (
                    <>
                        <StyledMenuBtn htmlType="button" type="text" onClick={menuHandler} $hasSidebar={hasSidebar} $sidebarOpen={sidebar} $bodyOpen={isBody} className="menu-btn">
                            <MenuOutlined style={{ fontSize: "25px;" }} />
                        </StyledMenuBtn>
                        <StyledSidebarBtn type="text" onClick={!isBody ? sidebarHandler : bodyHandler} $sidebarOpen={sidebar} $bodyOpen={isBody} className="sidebar-btn">
                            Left
                        </StyledSidebarBtn>
                    </>
                )}
                {hasSidebar && sidebarLayout === 2 && (
                    <>
                        <StyledMenuBtn htmlType="button" type="text" onClick={menuHandler} $hasSidebar={hasSidebar} $sidebarOpen={!sidebar}>
                            <MenuOutlined style={{ fontSize: "25px;" }} />
                        </StyledMenuBtn>
                        <StyledSidebarBtn type="text" onClick={sidebarHandler} $sidebarOpen={!sidebar}>
                            Left
                        </StyledSidebarBtn>
                    </>
                )}
                {!hasSidebar && (
                    <StyledMenuBtn htmlType="button" type="text" onClick={menuHandler} $hasSidebar={hasSidebar} $sidebarOpen={!sidebar}>
                        <MenuOutlined style={{ fontSize: "25px;" }} />
                    </StyledMenuBtn>
                )}
                <StyledLogo>
                    <Logo />
                </StyledLogo>
                <StyledNavbarWrap $isOpen={menuOpen} onClick={menuHandler}>
                    <StyledNavbarMenu $isOpen={menuOpen} onClick={(e: any) => e.stopPropagation()}>
                        <StyledNavbarHeader>
                            <Logo />
                            <StyledMenuBtn htmlType="button" type="text" onClick={menuHandler}>
                                <p>X</p>
                            </StyledMenuBtn>
                        </StyledNavbarHeader>
                        <StyledNavbarBody>
                            <Navbar menus={menuData} />
                        </StyledNavbarBody>
                    </StyledNavbarMenu>
                </StyledNavbarWrap>
                <StyleNavbarRight>
                    <StyledNavbarElement ml={["15px", "20px", "30px"]}>Test</StyledNavbarElement>
                </StyleNavbarRight>
            </StyledHeader>
        </>
    );
};

Header.defaultProps = {
    sidebarLayout: 1,
};

export default Header;
