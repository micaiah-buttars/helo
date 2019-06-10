select p.*, u.profile_pic, u.username from posts p
join users u on p.author_id = u.id