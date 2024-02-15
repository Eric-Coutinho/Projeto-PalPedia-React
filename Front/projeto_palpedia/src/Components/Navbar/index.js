import { useState } from "react";
import {
  Centered,
  Icon,
  Links,
  MenuLinks,
  Nav,
  NavLink,
  NavMenu,
  Row,
  Span,
  Supergraphic,
  Void,
} from "./styles";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import styles from "./supergraphic.module.css";
import Menu from "./img/list-view-mobile.svg";
import Close from "./img/close-small.svg";
import Right from "./img/forward-right-small.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { i18n } from "../../Translate/i18n";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClickNavigate() {
    navigate("/");
    if (isMenuOpen === true) setIsMenuOpen(!isMenuOpen);
  }

  const token = sessionStorage.getItem("token");
  if (!token) return;

  const tokenParts = token.split(".");
  const payload = atob(tokenParts[1].replace(/-/g, "+").replace(/_/g, "/"));
  const tokenObj = JSON.parse(payload);

  console.log(tokenObj);

  function LinkUsers() {
    if (tokenObj.isAdm !== true) return <></>;
    else
      return (
        <Span>
            <NavMenu>
              <Icon src={Right} />
              <Nav>
                <Link
                  to="/usuarios"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={handleClick}
                >
                  {i18n.t("navbar.users")}
                </Link>
              </Nav>
            </NavMenu>
          </Span>
      );
  }

  return (
    <>
      <Supergraphic className={styles.supergraphic} />
      <Row>
        <div className={styles.logo} onClick={handleClickNavigate} />
        <Void />
        <Links>
          <Form inline>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder={i18n.t("navbar.search")}
                className=" mr-sm-2"
              />
            </Col>
          </Form>
          <NavLink onClick={handleClick}>
            <Icon src={isMenuOpen ? Close : Menu} />
          </NavLink>
        </Links>
      </Row>
      {isMenuOpen && (
        <MenuLinks>
          <Span>
            <NavMenu>
              <Icon src={Right} />
              <Nav>
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={handleClick}
                >
                  {i18n.t("navbar.login")}
                </Link>
              </Nav>
            </NavMenu>
          </Span>
          <Span>
            <NavMenu>
              <Icon src={Right} />
              <Nav>
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={handleClick}
                >
                  {i18n.t("navbar.register")}
                </Link>
              </Nav>
            </NavMenu>
          </Span>
          <Span>
            <NavMenu>
              <Icon src={Right} />
              <Nav>
                <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={handleClick}
                >
                  {i18n.t("navbar.about")}
                </Link>
              </Nav>
            </NavMenu>
          </Span>
          <LinkUsers />
        </MenuLinks>
      )}
      <Outlet />
    </>
  );
}
