select p.title, p.img, p.content, u.profile_pic, u.username from posts p
join users u on p.author_id = u.id
where p.id = $1