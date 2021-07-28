<>
<Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
<Col xs lg="2">
  
</Col>
<Col md="auto">
<Row>
<Card style={{ width: '1035px',height:"419px"  }}>
<ListGroup variant="flush">
  <ListGroup.Item>
  <Row>
  <Col sm={4}>
  <img src={brand} alt="brand" />

  </Col>
  <Col sm={3}>
    
  </Col>
  <Col sm={5}>
    <h4>Booking</h4>
    {/* <p>{Nowss} </p> */}
  </Col>
  </Row>

  </ListGroup.Item>
  <ListGroup.Item>
  <Row>
  <Col sm>
  <h4>{data.house.name}</h4>
<p>{data.house.address}</p>
<Button variant="secondary">Waiting Payment</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>
    {/* <p>{Nowss} </p> */}
    <br></br>
    <p>Check-Out</p>
    {/* <p>{Nowss} </p> */}
    
    </Col>
    <Col sm>
      <h5>Amenities</h5>
      {/* <p>{Fur}</p>
      <p>{Pet}</p>
      <p>{Share}</p> */}
    </Col>
  </Row>
  </Col>
  <Col sm>
    <img style={{width:"138px"}} src="https://i1.wp.com/investasisyariah.info/wp-content/uploads/2018/02/Struk-Pembelian.jpg?resize=450%2C450&ssl=1" />
  <p>Upload Payment Proof</p>
  </Col>
</Row>
  
  <ListGroup>
  <Row>
  <Col sm="4">
  <Row>
  <Col sm="4">
   
  <h5>No</h5>
    
  </Col>
  <Col sm="4"><h5>Full Name</h5></Col>
  <Col sm="4"><h5>Gender</h5></Col>
</Row>
  </Col>
  <Col sm="4"><h5>Phone</h5></Col>
  <Col sm="4">

  </Col>
</Row>
  </ListGroup>
  </ListGroup.Item>
  <ListGroup.Item>
  {/* <Row>
  <Col sm={4}> */}

      {/* {userData.filter(item => item.username ==userval).map((items,index) => {
  console.log(userData)
  return(
    <> */}

  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  {/* <Col sm={4}>{items.fullname} </Col> */}
  {/* <Col sm={4}>{items.gender} </Col> */}
</Row>
 </Col>
  {/* <Col sm={4}>{items.phone}</Col> */}
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
  <p>1 Year </p>
  </Col>
</Row>
{/* </> */}

{/* )
})} */}

  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  <Col sm={2}>Rp. {data.house.price} </Col>
</Row>

  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={4}>

  {/* <Link to={{

    pathname: `/MyBookingPending/${userval}/${bookval}/${bookval}`
  }} > */}
  <Button variant="primary" style={{width:"150px"}}>

    Pay
  </Button>
  {/* </Link> */}
     </Col>
</Row>

  </ListGroup.Item>
  </ListGroup.Item>
</ListGroup>
</Card>
  <Col sm={4}></Col>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
</Row>
</Col>
<Col xs lg="2">
  
</Col>
</Row>
</>
