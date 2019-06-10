import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {synchronize, desync} from '../../ducks/reducer'
import axios from 'axios'

import './Nav.css'

class Nav extends Component {
    componentDidMount(){
        axios.get('/auth/me').then(res => {
            this.props.synchronize(res.data)
        })
    }
    logout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.desync()
            this.props.history.push('/')
        })
    }
    
    render(){
        if(this.props.location.pathname !== '/') {
            return(
                <div className='navBar'>
                    <Link to='/dashboard'><img className='profileImg' src={this.props.profile_pic} alt='user img'/></Link>
                    <span>{this.props.username}</span>
                    <Link to='/new'>new post</Link>
                    <button onClick={this.logout}>Logout</button>
                </div>
        )} else {
            return null
        }
    }
}

const mapState = (reduxState) => {
    return reduxState
  }

export default withRouter(connect(mapState, {synchronize, desync})(Nav))