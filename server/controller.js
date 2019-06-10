module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let newUser = await db.register([
            username,
            password
        ])
        // req.session.user =  {
        //     user_id: newUserArr[0].user_id,
        //     first_name: newUserArr[0].first_name,
        //     last_name: newUserArr[0].last_name,
        //     phone: newUserArr[0].phone,
        //     profile_pic_url: newUserArr[0].profile_pic_url,
        //     email: newUserArr[0].email
        // } 
        res.status(200).send(newUser[0])
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let user = await db.login([
            username,
            password
        ])
        // req.session.user =  {
        //     user_id: newUserArr[0].user_id,
        //     first_name: newUserArr[0].first_name,
        //     last_name: newUserArr[0].last_name,
        //     phone: newUserArr[0].phone,
        //     profile_pic_url: newUserArr[0].profile_pic_url,
        //     email: newUserArr[0].email
        // } 
        res.status(200).send(user[0])
    },
    getPosts: async (req, res) => {
        const {myPosts, search} = req.query
        const {userid} = req.params
        const db = req.app.get('db');
        let posts = await db.get_posts()

        if(!myPosts && !search){
            posts = posts.filter(post => post.author_id != userid)
        } else if(myPosts && search){
            posts = posts.filter(post => post.title.includes(`${search}`))
        } else if(!myPosts && search){
            posts = posts.filter(post => post.author_id != userid).filter(post => post.title.includes(`${search}`))
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
        const {id} = req.params
        const {title, img, content} = req.body
        const db = req.app.get('db');

        await db.new_post(title, img, content, id)
        

        res.status(200).send('yee')
        
    }
}