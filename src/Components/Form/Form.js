import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }
    handlePost = () => {
        axios.post('/new', this.state)
        .then(
            this.props.history.push('/dashboard')
        )
        

    }
    render(){
        const {title, img, content} = this.state
        
        return(
            <div>
                <label>
                    Title:
                    <input value={title} onChange={(e) => this.setState({
                    title: e.target.value
                    })}/>
                </label>

                <label>
                    Image:
                    <input value={img} onChange={(e) => this.setState({
                    img: e.target.value
                    })}/>
                </label>

                <label>
                    Content:
                    <input value={content} onChange={(e) => this.setState({
                    content: e.target.value
                    })}/>
                </label>
                <br/>
                <img src={img} alt='post preview'/>
                <button onClick={this.handlePost}>Post</button>
            </div>
        )
    }
}