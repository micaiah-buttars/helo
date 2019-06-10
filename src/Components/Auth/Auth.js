import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Auth.css'

import { synchronize } from './../../ducks/reducer';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  handleChange(key, val) {
      this.setState({
        [key]: val
      })
  }
  login() {
    axios.post('/auth/login', this.state)
      .then(res => {
        console.log(1111111, res.data)
        this.props.synchronize(res.data);
        this.props.history.push('/dashboard');
      })
  }
  register() {
    axios.post('/auth/register', this.state)
      .then(res => {
          
        this.props.synchronize(res.data);
        this.props.history.push('/dashboard');
      })
  }
  render() {
    return (
      <div className='authBody'>
        <div className='authForm'>
          <h1 >Helo</h1>
          <div >
            <p>Username:</p>
            <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
          </div>
          <div >
            <p>Password:</p>
            <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)} />
          </div>
          <div >
            <button onClick={this.login}> Login </button>
            <button onClick={this.register}> Register </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => {
    return reduxState
  }

export default connect(mapState, { synchronize })(Auth);