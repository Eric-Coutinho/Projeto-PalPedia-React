import { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AlertContext } from "../../Context/Alert/index";

import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";

import { i18n } from "../../Translate/i18n";

export default function Formulario() {
  const { setMessage, setShow, setVariant } = useContext(AlertContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formValid()) return;

    const json = {
      name,
      email,
      password,
    };

    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();
    try {
      var res = await axios.post("http://localhost:8080/api/user/register", {
        jsonCrypt,
      });

      setMessage(res.data.message);
      setVariant("success");
      setShow(true);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  function formValid() {
    if (!name.includes(" ")) {
      setMessage("Insira nome e sobrenome");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (name.length < 3) {
      setMessage("Insira um nome e sobrenome válidos");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (!email.includes("@")) {
      setMessage("Insira um e-mail válidos");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (email.length < 6) {
      setMessage("Insira um e-mail válido");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (confirmPassword !== password) {
      setMessage("As senhas não conferem");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (password.length < 6) {
      setMessage("Senha inferior a 6 caracteres");
      setShow(true);
      setVariant("danger");
      return false;
    }

    return true;
  }

  return (
    <Form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{i18n.t("register.nameComplete")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={i18n.t("register.name")}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{i18n.t("register.emailAdress")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={i18n.t("register.email")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{i18n.t("register.password")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={i18n.t("register.password")}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{i18n.t("register.confirmPassword")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={i18n.t("register.confirmPassword")}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginBlock: "0.8em" }}>
      {i18n.t("register.buttonRegister")}
      </Button>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="danger" type="button" style={{ width: '100%' }}>
        {i18n.t("register.buttonCancel")}
        </Button>
      </Link>
    </Form>
  );
}


