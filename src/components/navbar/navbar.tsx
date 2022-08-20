import { useClickOutside } from "../../hooks";
import { getSiblings } from "../../helpers/methods";
import { IMenu } from "../../types/components";
import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  StyledMegaMenu,
  StyledMegaMenuInner,
  StyledMegamenuLabel,
  StyledMegamenuList,
  StyledNavbar,
  StyledNavitem,
  StyledNavlink,
  StyledSubmenu,
  StyledSubNavItem,
  StyledSubNavlink,
} from "./style";
import { Anchor } from "antd";

interface IProps {
  menus: IMenu[];
}

export const Navbar: React.FC<IProps> = ({ menus }) => {
  const { pathname } = useLocation();

  const clickHandler = (e: React.MouseEvent, hasChildren: boolean) => {
    if (hasChildren) {
      e.preventDefault();
      let target = e.currentTarget as HTMLElement;
      if (target.nodeName === "A") {
        target = target.parentElement as HTMLElement;
      }
      const submenu = target.querySelector(".submenu");
      const siblings = getSiblings(target);
      submenu?.classList.toggle("open");
      siblings.forEach((sib) => {
        sib.childNodes.forEach((child) => {
          const childHT = child as HTMLElement;
          childHT?.classList?.remove("open");
        });
      });
    }
  };
  const onClose = useCallback(() => {
    const nav = document.querySelector(".navbar");
    const submenu = nav?.querySelectorAll(".submenu");
    submenu?.forEach((el) => el.classList.remove("open"));
  }, []);

  const containerRef = useClickOutside<HTMLUListElement>(onClose);
  return (
    <StyledNavbar ref={containerRef} className="navbar">
      {menus &&
        menus.map((nav: IMenu) => {
          const {
            submenu,
            megamenu,
            id: navId,
            Icon: NavIcon,
            label: navLabel,
          } = nav;
          const hasSubmenu = !!submenu?.length;
          const hasMegamenu = !!megamenu?.length;
          const hasChildren = hasSubmenu || hasMegamenu;
          return (
            <StyledNavitem
              $hasSubmenu={hasChildren}
              $active={pathname === nav.url}
              key={navId}
              onClick={(e) => clickHandler(e, hasChildren)}
            >
              <StyledNavlink affix={false}>
                {NavIcon && <NavIcon />}
                <Anchor.Link
                  title={navLabel}
                  href={hasChildren ? "#!" : nav.url}
                />
              </StyledNavlink>
              {hasSubmenu && (
                <StyledSubmenu className="submenu">
                  {submenu?.map(({ id, label, url, Icon }: any) => (
                    <StyledSubNavItem key={id}>
                      <StyledSubNavlink affix={false}>
                        {Icon && <Icon />}
                        <Anchor.Link title={label} href={url} />
                      </StyledSubNavlink>
                    </StyledSubNavItem>
                  ))}
                </StyledSubmenu>
              )}
              {hasMegamenu && (
                <StyledMegaMenu className="submenu">
                  <StyledMegaMenuInner>
                    {megamenu?.map((megaNav: any) => (
                      <StyledMegamenuList key={megaNav.id}>
                        <>
                          {megaNav?.title && (
                            <StyledMegamenuLabel>
                              {megaNav?.title}
                            </StyledMegamenuLabel>
                          )}
                          {megaNav?.submenu?.map(
                            ({ id, label, url, Icon }: any) => (
                              <StyledSubNavItem key={id}>
                                <StyledSubNavlink affix={false}>
                                  {Icon && <Icon />}
                                  <Anchor.Link title={label} href={url} />
                                </StyledSubNavlink>
                              </StyledSubNavItem>
                            )
                          )}
                        </>
                      </StyledMegamenuList>
                    ))}
                  </StyledMegaMenuInner>
                </StyledMegaMenu>
              )}
            </StyledNavitem>
          );
        })}
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  menus: [],
};
