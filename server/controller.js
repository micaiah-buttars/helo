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
}