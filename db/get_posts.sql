select p.id as post_id, p.title, u.profile_pic, u.username from posts p
join users u on p.author_id = u.id