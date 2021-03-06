import React from 'react';
import axios from 'axios';
import './darkmode.css';
import './pages.css';
import './login.css';

import EditProjects from './EditProjects';
import DeleteProjects from './DeleteProjects';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            login: false,
            title: "Login to add and delete projects.",
            mode: ""
        };
        this.onKeyDown = this.onKeyDown.bind(this);
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    toHome = () => {
      this.props.history.push('/');
    }

    onKeyDown(e){
      if(e.keyCode === 13){
        axios.post('/login', {username:this.state.username, password:this.state.password})
            .then((res)=>{
              console.log(res);
                if(res.data===true){
                    console.log('Login success.');
                    this.setState({login: true,
                                   username: "",
                                   password: "",
                                   title: "Logged in."});
                } else if (res.data===false){
                    console.log('Login failure.');
                    this.setState({login: false,
                                   username: "",
                                   password: "",
                                   title: "Login failed. Please try again.",});
                }
            })
      }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/login', {username:this.state.username, password:this.state.password})
            .then((res)=>{
              console.log(res);
                if(res.data===true){
                    console.log('1');
                    this.setState({login: true,
                                   username: "",
                                   password: "",
                                   title: "Logged in."});
                } else if (res.data===false){
                    console.log('2');
                    this.setState({login: false,
                                   username: "",
                                   password: "",
                                   title: "Login failed. Please try again."});
                }
            })

        //console.log("Submit");
    }


    toEdit = () => {
      this.setState({
          mode: "edit"
      })
    }

    toDelete = () => {
      this.setState({
          mode: "delete"
      })
    }


    render() {
      if(!this.state.login){
        return(
            <div className = "fullPageDark">

              <button
                className = {"modeButtonDark"}
                onClick={this.toHome}
              >Home</button>
              <div className = "bioTextDark">
              <h1 className={"title"}>{this.state.title}</h1>

              <br />

              <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDown}
              />
              <br />

              <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDown}
              />
              <br /><br />

              <button className = "modeButtonDark" testID="submitButton" onClick={this.handleSubmit}>Login</button>

              </div>

            </div>
        )

      } else {

        var editDelete, status;
        if(this.state.mode === "edit"){
          editDelete = <EditProjects />
          status = "Adding Projects."
        } else if(this.state.mode === "delete"){
          editDelete = <DeleteProjects />
          status = "Deleting Projects."
        }

        return(
          <div className = {"fullPageDark"}>
            <button
              className = {"modeButtonDark"}
              onClick={this.toHome}
            >Home</button>

            <h1 className="title">{this.state.title}</h1>
            <br />


            <div className = "buttonBox">
              <button
              testID = "add-proj-btn"
              className = {"modeButtonDark"}
              onClick={this.toEdit}
              >Add Projects</button>

              <button
              testID = "del-proj-btn"
              className = {"modeButtonDark"}
              onClick={this.toDelete}
              >Delete Projects</button>
            </div>


            <h1 className="title">{status}</h1>
            <br />


            {editDelete}

          </div>
        )
      }
    }
}

export default Login;
