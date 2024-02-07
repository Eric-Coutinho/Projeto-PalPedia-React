import { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AlertContext } from "../../Context/Alert/index";

import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";

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
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirmar senha"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginBlock: "0.8em" }}>
        Registrar
      </Button>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="danger" type="button" style={{ width: '100%' }}>
          Cancelar
        </Button>
      </Link>
    </Form>
  );
}
