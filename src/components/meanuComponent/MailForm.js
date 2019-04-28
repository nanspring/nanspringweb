import React, { Component } from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const LoadingSpinner = () => (
      <div>
        <i className="fa fa-spinner fa-spin" /> Sending...
      </div>
    );
class Mail extends Component {
  constructor(){
    super();
      this.state = {
      name:'',
      email: '',
      message: '',
      msg:'',
      loading:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e =>{
    this.setState({ [e.target.name]:e.target.value })
  }

  async handleSubmit(e){
    e.preventDefault()
    this.setState({loading:true})
    const {name,email,message,msg}=this.state
    axios.defaults.baseURL='https://calm-meadow-93396.herokuapp.com'
    const form = await axios.post('/api/form',{
      name,
      email,
      message
    })
    .then(response=>{
      this.setState({msg:response.data,loading:false})
      alert("Succeeded! Thanks for reaching out!")
      this.setState({
        name:'',
        email: '',
        message: ''
      })
  })
    .catch( error => {
        console.log(error);
        alert("Sending Fail. Please try again.")
    });

  }


  render() {
    const {n,e,m,ms,loading} = this.state;
    return(
      <div class = "mail-wrap">
      <h4 style={{backgroundColor:'white'}}>Contact Me</h4>
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

        <Button >Submit</Button>
      </Form>
      {loading ? <LoadingSpinner /> : ""}
      <div class="contact">
      {this.state.msg}
      </div>
      </div>
    );
  }
}

export default Mail;
