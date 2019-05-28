select * from photo_post order by CREATION_DATE asc;
select * from photo_post where user_id=1;
select * from photo_post where (user_id=1) and (creation_date='2019-05-01');
select * from photo_post where (user_id=1) and (description like '%hello%');
select photo_post.user_id, name from photo_post 
left join user 
on photo_post.user_id=user.user_id
group by photo_post.user_id
having count(photo_post.user_id) > 1;
select * from user;