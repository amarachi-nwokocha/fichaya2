import {React  } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const About = () => {
    return(
    <div className="container">
       
        < Btn />
        < Sub />
      < Box/>
        
</div>
    )
}
const Btn = () => {
  return(
    <button className='butt'>request information</button>
  )
}
const Sub = () => {
    return( 
        <p className='butt'>ENTER INVOICE INFO </p>
    )
}
const Box = () => {
    return(
        <form className='twice'  id='box1'>
          <FormGroup>
         <Label for="exampleText">Customer/Company name</Label>
         <Input type="textarea" name="text" id="exampleText" />
         </FormGroup>
         <div className=' space' >
         <FormGroup>
          <Label for="exampleEmail">Email address</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
             </FormGroup>
                <FormGroup>
            <Label for="exampleText">Customer/Company name</Label>
            <Input type="number" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
         <Label for="exampleText">Home or building address</Label>
            <Input type="textarea" name="text" id="exampleText" />
         </FormGroup>
            </div>
            <div id='box2'>
                <div className="space">
                <FormGroup>
         <Label for="exampleDatetime">Issue date</Label>
         <Input
          type="datetime" id="exampleDatetime" placeholder="08/10/2020"/>
          </FormGroup>
          <FormGroup>
         <Label for="exampleDatetime">Due date</Label>
         <Input type="datetime"id="exampleDatetime"placeholder="08/10/2020"/>
          </FormGroup>
          </div>
          <FormGroup>
        <Label for="exampleDatetime">Invoice number</Label>
        <Input type="number" id="exampleDatetime"placeholder="000000001"/>
          </FormGroup>
          <FormGroup>
        <Label for="exampleDatetime">V.A.T%</Label>
        <Input type="number" id="exampleDatetime"placeholder="7.5%"/>
          </FormGroup>
          </div>
                  <FormGroup>
         <Label for="exampleText">Service description</Label>
         <Input type="textarea" name="text" id="exampleText" placeholder="5 bedroon Duplex post-con cleaning " />
         </FormGroup>
         <div className="space">
             <FormGroup>
        <Label for="exampleDatetime">Service Amount</Label>
        <Input type="number" id="exampleDatetime"placeholder="NGN45,000"/>
          </FormGroup>
          <FormGroup>
        <Label for="exampleDatetime">Total amount</Label>
        <Input type="number" id="exampleDatetime"placeholder="NGN 48,375"/>
          </FormGroup>
         </div>
         <div className="space">
             <Button color="primary" size="lg">Cancle</Button>{' '}
             <Button color="primary" size="lg">Create invoice</Button>{' '}
         </div>
        
        </form>
    )
}




export default About;