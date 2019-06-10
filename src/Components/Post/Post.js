import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            username: '',
            profile_pic: ''
        }
    }
    componentDidMount(){
        axios.get(`/post/${this.props.match.params.post_id}`)
        .then(res => {
            const {title, img, content, username, profile_pic} = res.data
            this.setState({
                title,
                img,
                content,
                username,
                profile_pic
            })
          })
        

    }

    render(){
        const {title, img, content, username, profile_pic} = this.state
        return(
            <div>
                <div>
                    <span>{title}</span>
                    <label>
                        by {username}
                        <img className='profileImg' src={profile_pic} alt='user avatar'/>
                    </label>
                </div>
                <div>
                    <img src={img} alt=''/>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}