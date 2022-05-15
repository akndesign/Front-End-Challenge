import React from 'react';
import {Button, Form} from 'react-bootstrap';
//import { Form } from 'react-bootstrap-validation'
import './PromptInput.css';


const PromptInput = (props) => (
    <Form onSubmit={this.onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What Product Would You like to getadescription for?</Form.Label>
        <Form.Control
           type="text"
           name="productName"
           placeholder="Enter Product Name" />
   I
    <Form.Text className="text-muted"> 
      Enter as much information as possible for more accurate descriptions.
    </Form.Text>
    </Form.Group>

  <Button variant="primary" size="lg" type="submit">
     Get AI Suggestions
  </Button>
</Form>
    
);

export default PromptInput;