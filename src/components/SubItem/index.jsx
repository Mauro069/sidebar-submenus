import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  linkOpen,
  normal,
  subLinksContainer,
  subItem,
  subLinksContainerClose,
  arrowTop,
  arrowDown,
} from "./styles.module.scss";

const SubItem = ({ links, open, text, svg }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  console.log(links);

  const onClick = () => setSubMenuOpen(!subMenuOpen);

  useEffect(() => {
    if (!open) setSubMenuOpen(false);
  }, [open]);

  return (
    <>
      <div className={open ? linkOpen : normal}>
        <div>{svg}</div>
        {open ? (
          <div onClick={onClick}>
            <p>{text}</p>
            <svg
              className={!subMenuOpen ? arrowTop : arrowDown}
              height="10"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L3.97 6L0 0H8Z" fill="black" />
            </svg>
          </div>
        ) : null}
      </div>
      <div
        className={!subMenuOpen ? subLinksContainerClose : subLinksContainer}
      >
        {subMenuOpen &&
          open &&
          links.map((link) => (
            <NavLink className={subItem} to={link.to}>
              <div>{link.svg}</div>
              <p>{link.text}</p>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default SubItem;
