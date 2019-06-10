import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            myPosts: true,
            posts: []
        }
        this.getPosts = this.getPosts.bind(this);
    }
    
    getPosts() {
        let { search, myPosts } = this.state;
        let url = `/posts/${this.props.id}`;
        if (myPosts && !search) {
          url += '?myPosts=true';
        } else if (!myPosts && search) {
          url += `?search=${search}`;
        } else if (myPosts && search) {
          url += `?myPosts=true&search=${search}`;
        }
        axios.get(url)
          .then(res => {
            this.setState({ posts: res.data, search: ''})
          })
      }
      componentDidMount(){
        this.getPosts()
      }
      reset = async () => {
        await this.setState({
            search: '',
            myPosts: true,
            posts: []
          })
          this.getPosts()

      }
    render(){
        console.log(this.state)
        let posts = this.state.posts.map((post) => {
            const {id, title, img, content, author_id} = post
            return <div key={id}>
            {title}
            

            </div>
        })
        
        return(
            <div>
                <input value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
                <label>
                    <input type='checkbox' checked={this.state.myPosts} onChange={(e) => this.setState({myPosts: !this.state.myPosts})}/>
                    My Posts
                </label>
                <button onClick={this.getPosts}>Search</button>
                <button onClick={this.reset}>Reset</button>
                {posts}
            </div>
        )
    }
}

const mapState = (reduxState) => {
  return reduxState
}

export default connect(mapState)(Dashboard);