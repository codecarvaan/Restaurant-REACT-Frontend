import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import  { Redirect } from 'react-router-dom'
import Alert from "react-bootstrap/Alert";


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    
      varient:'',
      rescode:'',
      resmsg:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var form=document.getElementById("loginform");
   
    var username=form[0].value;
    var password=form[1].value;
    if(username =="email@fortinet.com" && password=="fortinet"){
    localStorage.setItem("IsLogined","yes");
    
    window.location = "/";}
    else{
      var x=document.getElementById("msginfobox");
          x.classList.remove("infobox-hide");
          x.classList.add("infobox-show");
      this.setState({rescode:'Failed '});
      this.setState({resmsg:'Please enter correct username and password'});
      this.setState({varient:'danger'});
    }
  }

  render() {
    const { classes } = this.props;
    
    return (
  
      <div className="loginbox">
       <div className="dissmissable infobox infobox-hide" id="msginfobox">
            <Alert variant={this.state.varient}>
            <Alert.Heading>Response: {this.state.rescode}</Alert.Heading>
            <p>
            {this.state.resmsg}
            </p>
            </Alert>
            </div>
        <Form  onSubmit={this.handleSubmit} id="loginform">
          <h4>World Restraurant Portal </h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="input-label">Email address</Form.Label>
            <Form.Control
              className="input-field"
              type="email"
              placeholder="Enter email"
              
           
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {console.log("sdf")}
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="input-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="input-field"
             
              
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

 export default withStyles(styles)(Login);
