import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        if(this.props.location.pathname !== '/') {
            console.log(this.props)
            return(
                <div>
                    <Link to='/dashboard'><img src={this.props.profile_pic} alt='user img'/></Link>
                    <span>{this.props.username}</span>
                    <Link to='/new'>new post</Link>
                    <Link to='/'>logout</Link>
                </div>
        )} else {
            console.log(this.props)
            return null
        }
    }
}

const mapState = (reduxState) => {
    return reduxState
  }

export default withRouter(connect(mapState)(Nav))