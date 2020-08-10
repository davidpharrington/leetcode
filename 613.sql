/*613.sql
# Write your MySQL query statement below */

/* 69% performance */
select (abs(a.x-b.x)) as shortest from point as a
cross join point as b 
where (abs(a.x-b.x)) > 0
order by shortest asc 
limit 1



