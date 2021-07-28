import {Table} from "react-bootstrap"
import TransactionList from "../components/TransactionList";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { useState,useEffect,useContext } from "react";

const Owner =() =>{
    const [loading, setLoading] = useState(true);
    const { isLoading, data, error } = useQuery("houses", async () => {
        const response = await API.get("/transactions");
        return response.data.data;
        setLoading(false)
      });

    return(
        <>
    <TransactionList data={data} isLoading={isLoading} error={error} />


{/* <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table> */}
        </>

    )
    


}

export default Owner;