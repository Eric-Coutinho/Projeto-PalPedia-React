import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";

import axios from "axios";

export default function UserCardComponent() {
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState([]);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  console.log(token);

  const tokenParts = token.split('.');
  const payload = atob(tokenParts[1].replace(/-/g, '+').replace(/_/g, '/'));
  const tokenObj = JSON.parse(payload);

  console.log(tokenObj);

  if(tokenObj.isAdm !== true)
    navigate('/notFound');

  async function GetUsers() {
    try {
      const res = await axios.get("http://localhost:8080/api/user/find");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function DeleteUser() {
    try {
      const res = await axios.delete(`http://localhost:8080/api/user/delete/${idUser}`);
      console.log(res);
      const updatedUsers = users.filter((user) => user._id !== idUser);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetUsers();
  }, [])

  async function handleClick(e, userId) {
    setIdUser(userId);
    DeleteUser();
    navigate('/usuarios');
  }

  const RenderCards = () => {
    return users.map((user) => {
      return (
          <Col>
            <Card
              className={styles.cardPal}
              style={{
                backgroundColor: "gray",
                padding: "2em",
                flexDirection: "row",
                color: "white",
              }}
            >
              <Card.Title style={{ fontSize: "2em" }}>{user.name}</Card.Title>
              <Button type="submit" variant="danger" onClick={(e) => handleClick(e, user._id)}>
                {" "}
                <Icon.Trash />{" "}
              </Button>
            </Card>
          </Col>
      );
    });
  };

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4">
        <RenderCards /> 
      </Row>
    </>
  );
}
