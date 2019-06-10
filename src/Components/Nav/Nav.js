import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './Nav.css'

class Nav extends Component {
    
    render(){
        if(this.props.location.pathname !== '/') {
            return(
                <div className='navBar'>
                    <Link to='/dashboard'><img className='profileImg' src={this.props.profile_pic} alt='user img'/></Link>
                    <span>{this.props.username}</span>
                    <Link to='/new'>new post</Link>
                    <Link to='/'>logout</Link>
                </div>
        )} else {
            return null
        }
    }
}

const mapState = (reduxState) => {
    return reduxState
  }

export default withRouter(connect(mapState)(Nav))