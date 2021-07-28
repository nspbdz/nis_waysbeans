import { useState,useContext } from "react";
import { Modal, Button, Form,Alert } from "react-bootstrap";
import { UserContext } from '../contexts/userContext'
import userData from '../data/User'

  function ModalSignin(props) {
    const { show, handleClose } = props;

  return (
   <>
    <Modal show={show} onHide={handleClose}>

<Modal.Header>
<Modal.Title>Change Password</Modal.Title>
</Modal.Header>
<Modal.Body>

{/* <Form onSubmit={handleOnSubmit}> */}
<Form >

<h2>Old Password</h2>
    
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control required  name="oldpassword"  type="password" placeholder="oldpassword" />
    </Form.Group>
<h2>Confirm Password</h2>
   
    <Form.Group className="mb-3" controlId="formBasicDesc">
        <Form.Control required  name="password" type="password" placeholder="Password" />
    </Form.Group>
<h2>New Password</h2>

    <Form.Group className="mb-3" controlId="formBasicDesc">
        <Form.Control required  name="newpassword"  type="newpassword" placeholder="newPassword" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Save
    </Button>
</Form>
</Modal.Body>

</Modal>
   </>
  );
};

export default ModalSignin;
