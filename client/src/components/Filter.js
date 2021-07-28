import { Row, Col,Form } from "react-bootstrap";
import React, { Component } from "react";
import { useHistory,Router,Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import data from "../data/fakeData";
import TypeRent from "./TypeRent";
import CardItem from "../components/CardItem"
import Sidebar from "./Sidebar";

function Filter(){

  return(
    <>
<Sidebar />
    </>


  )
}

export default Filter;