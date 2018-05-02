import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {ADD_USERNAME,DELETE_EVERYTHING} from './constants'

var loggedIn=false;
class App extends Component {
  constructor(props) {
    super(props);
    this.state={username:''}
    this.logOut=this.logOut.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  logOut() {
    this.props.deleteEverything();
      window.location.reload();
  }

  handleClick(){
   if(this.state.username==='dog'){
     console.log(this.props);
     this.props.addUsername(this.state.username);
     console.log(this.props);
     window.location.reload();
   }
   else{
     alert('You are not a dog!');
   }
  }

  updateInputValue(evt){
    this.setState({username: evt.target.value});
  }
  render(){
    console.log(this.props)
    if (this.props.usernameinfo == null) {
        loggedIn = false;
    }
    else {
        loggedIn = true;
    }
    if(loggedIn){
      return(
        <div>
        <p className="App-intro">
          This is mainView. You are logged in as a {this.props.usernameinfo.username}.
          </p>
          <p>
        <input type="button" value="logout" onClick={this.logOut}/>
        </p>
        </div>
      )
    } else {
      return(
        <div>
        <p className="App-intro">
          This is mainView.
          </p>
          <input type="text" onChange={this.updateInputValue}/>
          <input type="button" value="login" onClick={this.handleClick}/>
</div>
      )
    }
  }
}

function mapStateToProps(state) {
    const {usernameinfo} = state;
    return {
        usernameinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUsername: (username) => dispatch({
            type: ADD_USERNAME,
            username
        }),
        deleteEverything: () => dispatch({
            type: DELETE_EVERYTHING
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
