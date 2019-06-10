module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let user = await db.register([
            username,
            password
        ])
        req.session.user_id = user[0].id
        res.status(200).send(user[0])
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let user = await db.login([
            username,
            password
        ])
        req.session.user_id = user[0].id,
    
        res.status(200).send(user[0])
    },
    getUser: async (req, res) => {
        const db = req.app.get('db');
        let user = await db.get_user(req.session.user_id)
    
        res.status(200).send(user[0])
    },
    getPosts: async (req, res) => {
        const {myPosts, search} = req.query
        const {user_id} = req.session
        const db = req.app.get('db');
        let posts = await db.get_posts()

        if(myPosts && search){
            posts = posts.filter(post => post.title.includes(`${search}`))
        } else if(!myPosts && !search){
            posts = posts.filter(post => post.author_id != user_id)
        } else if(!myPosts && search){
            posts = posts.filter(post => post.author_id != user_id).filter(post => post.title.includes(`${search}`))
        } 

        res.status(200).send(posts)
    },
    getPost: async (req, res) => {
        const {post_id} = req.params
        const db = req.app.get('db');
        let post = await db.get_post(post_id)

        res.status(200).send(post[0])
        
    },
    post: async (req, res) => {
        const {user_id} = req.session
        const {title, img, content} = req.body
        const db = req.app.get('db');

        await db.new_post(title, img, content, user_id)
        

        res.status(200).send('yee')
        
    },
    logout(req, res) {
        req.session.destroy(() => res.sendStatus(200)); 
    }
}