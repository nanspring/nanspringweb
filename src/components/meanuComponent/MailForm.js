import React, { Component } from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const API_PATH = 'http://localhost:8080';
class Mail extends Component {
  constructor(){
    super();
      this.state = {
      name:'',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e =>{
    this.setState({ [e.target.name]:e.target.value })
  }

  async handleSubmit(e){
    e.preventDefault()
    const {name,email,message}=this.state
    console.log(this.state)
    axios.defaults.baseURL="http://localhost:3001"
    const form = await axios.post('/api/form',{
      name,
      email,
      message
    })
  }

  render() {

    return(
      <div class = "mail-wrap">
      <h4 style={{backgroundColor:'rgb(107,142,35)'}}>Contact Me</h4>
      <Form onSubmit={this.handleSubmit} style={{width:'600px'}}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            style={{backgroundColor:'rgb(234, 230, 218)'}}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            style={{backgroundColor:'rgb(234, 230, 218)'}}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            type="textarea"
            name="message"
            style={{backgroundColor:'rgb(234, 230, 218)'}}
            onChange={this.handleChange} />
        </FormGroup>

        <Button style={{backgroundColor:'rgb(107,142,35)'}}>Submit</Button>
      </Form>
      </div>
    );
  }
}

export default Mail;
