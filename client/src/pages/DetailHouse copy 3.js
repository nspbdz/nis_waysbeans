import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddProduct(props) {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
      name: "",
      checkin:2000-10-10,
    checkout: "",
    user_id:1,
    houseId:19,
    status:""
    // checkin: "",
  });
  const handleChange = (event) => {
    const a=event.target.value
    console.log(formData)
    // setFormData(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });

  }
  const aa=String(formData.checkin)
  console.log(formData.checkin)

  const saveGames = () => {
    fetch('http://localhost:5000/api/v1/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        checkin: formData.checkin,
        checkout: formData.checkout,
        user_id: 1,
        houseId: 1,
        status: "",

        user_id: formData.user_id,
        houseId: formData.houseId,
        status: formData.status,
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveGames() // Save games when form is submitted
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={formData.name} onChange={handleChange} />
    {/* <input type="date" name="checkins" value={formData.checkin} onChange={handleChange} /> */}
    <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
    <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
    
    <button type="submit">click</button>
  </form>
  );
}

export default AddProduct;
