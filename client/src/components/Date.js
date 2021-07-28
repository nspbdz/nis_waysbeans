import React from 'react'
import { Form } from 'react-bootstrap';

class Date extends React.Component{

    render(){

        return( 
            <div>
                <div className="row">
                    <div className="col-md-4">
                     <p className="h5 text-left font-weight-bold">Date</p>
                        
                        <Form.Group controlId="dob" id="datestyle">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Date;